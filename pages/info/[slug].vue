<template>
  <nuxt-img class="border-5 border-white shadow-xl m-3" :src="`${ config.public.apiBase }${image.attributes.uri.url }`"  format="webp" :alt="`Logo ${ title  }, sponsor van BAM! Festival Hengelo (Ov.)`"></nuxt-img>
	<h1>{{ title }}</h1>
	<div class="p-4 m-2 border-gray-600 border-1" v-html="body"></div>
  <pre>{{ result[0] }}</pre>
</template>
<script setup lang="ts">
  let title = '';
  let body = '';
  
  const config = useRuntimeConfig();
  const route = useRoute();
  const slug = (route.params.slug).toLowerCase();
  const pagesApi = 'https://api.bamfestival.nl/jsonapi/node/page?json_include=1&include=field_image,field_images,field_files,field_tags&filter[field_slug][value]='+slug;
  const { data: result }  = await $fetch(pagesApi);
  const { data: image }  = await $fetch('https://api.bamfestival.nl/jsonapi/file/file/'+result[0].relationships.field_image.data.id);
  console.log(image.attributes.uri.url);
  watchEffect(() => {
  const slug = route.params.slug;

  if (result[0]) {
    // Update the reactive page object
    title = result[0].attributes.title;
    body = result[0].attributes.body.value
    
  } else {
    // Handle not found (you might want to set default values or show an error)
    title = 'Page Not Found';
    body = 'Sorry, the requested page was not found.';
  }
});
  

</script>
