<template>
  <div>
    <pre>{{ articles }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const articles = useState('articles');
</script>

<style>

</style>