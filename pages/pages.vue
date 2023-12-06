<template>
  <div>
    <pre>{{ pages }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const pages = useState('pages');
</script>

<style>

</style>