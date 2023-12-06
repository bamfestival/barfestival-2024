<template>
  <div>
    <pre>{{ photographers }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const photographers = useState('photographers');
</script>

<style>

</style>