<template>
  <nuxt-img v-if="image" class="border-5 border-white shadow-xl m-3" :src="image"  format="webp" :alt="`Logo ${ title  }, sponsor van BAM! Festival Hengelo (Ov.)`"></nuxt-img>
	<h1>{{ title }}</h1>
  <div>{{ slug }}</div>
	<div class="p-4 m-2 border-gray-600 border-1" v-html="body" v-if="body"></div><hr>
  <ul>
    <li v-for="item in result.data[0].relationships.field_files.data ">{{  item.id }} {{ item.meta.description }} {{ (result.included.find(x => x.id === item.id).attributes.uri.url ) }}</li>
  </ul>
  <pre>{{  result.included }}</pre>

</template>
<script setup lang="ts">
      let title = '';
      let body = '';
      let image = '';
  const route = useRoute();
  const config = useRuntimeConfig();
  const slug = (route.params.slug).toLowerCase();
  const pagesApi = config.public.apiBase+'/jsonapi/node/page?json_include=1&include=field_image,field_images,field_files,field_tags&filter[field_slug][value]='+slug;
  
  const result = await $fetch(pagesApi);
  
  if(result.data[0])
    {
        console.log('Fetch successful:', result.data[0].relationships.field_image.data.id);
        const imageApi = config.public.apiBase+'/jsonapi/file/file/'+result.data[0].relationships.field_image.data.id;
        const imageresult = await $fetch(imageApi); 
        image = config.public.apiBase+imageresult.data.attributes.uri.url;
        title = result.data[0].attributes.title;
        body = result.data[0].attributes.body.value
        const filesx = await result.data[0].relationships.field_files.data;
        console.log(filesx);
        
     
        
    } else {
      console.log('Fetch unsuccesful');
        let title = 'Sorry, deze pagina bestaat niet';
        let body = '';
        let image = '';
    }
  

</script>