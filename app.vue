<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  
</template>

<script setup lang="ts">
  
  const config = useRuntimeConfig();
  const { data: sponsoren, pending, error, refresh } = await useFetch('/api/sponsoren')
  const sponserData = useState('sponsoren', () =>  sponsoren);


</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>