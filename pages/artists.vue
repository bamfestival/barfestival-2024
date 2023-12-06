<template>
  <div>
    <pre>{{ artists }}</pre>
  </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const artists = useState('artists');
</script>

<style>

</style>