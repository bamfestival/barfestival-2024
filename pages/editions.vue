<template>
  <div>
    <pre>{{ editions }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const editions = useState('editions');
</script>

<style>

</style>