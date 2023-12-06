<template>
  <!-- Sponsoren -->
<div class="bg-white mx-auto w-full py-12 px-6 lg:px-8 lg:py-12">
  <div class="text-left">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sponsoren van BAM! Festival</h2>
  </div>
  <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 lg:mt-8">
        <div v-for="sponsor in sponsoren" :key="sponsor.id" class="col-span-1 flex justify-center  py-8 px-8">
          <a :href="sponsor.field_link.uri " target="_blank" :title="`Website ${ sponsor.title}`">
           <nuxt-img :src="`${ config.public.apiBase }${sponsor.field_image.uri.url }`"  format="webp" :alt="`Logo ${ sponsor.title }, sponsor van BAM! Festival Hengelo (Ov.)`"></nuxt-img>
        </a>
        </div>
  </div>
</div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();
    const sponsoren = useState('sponsoren');
</script>

<style>

</style>