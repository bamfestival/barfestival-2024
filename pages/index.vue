<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
  <div>
    <p>{{ config.public.sponsorenApi }}</p>
    <BlockSponsorsVue/>
    <pre>{{  sponsoren }}</pre>
   
  </div>  
 
</template>

<script setup lang="ts">
    
    const route = useRoute();
    const config = useRuntimeConfig();
    const sponsoren = useState('sponsoren');


    
</script>
