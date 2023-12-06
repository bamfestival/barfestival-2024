<template>
  <div>
    <pre>{{  galleries }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const galleries = useState('galleries');
</script>

<style>

</style>