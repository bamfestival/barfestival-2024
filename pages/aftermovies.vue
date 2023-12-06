<template>
  <div>
    <pre>{{ aftermovies }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const aftermovies = useState('aftermovies');
</script>

<style>

</style>