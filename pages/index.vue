<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
  <div>
    
    
   
  </div>  
 
</template>

<script setup lang="ts">
    
    const route = useRoute();
    const config = useRuntimeConfig();
   


    
</script>
