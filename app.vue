<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  
</template>

<script setup lang="ts">
  
  const config = useRuntimeConfig();
  const { data: sponsoren  } = await useFetch('/api/sponsoren');
  const sponsersData = useState('sponsoren', () =>  sponsoren);

  const { data: aftermovies } = await useFetch('/api/aftermovies');
  const aftermoviesData = useState('aftermovies', () =>  aftermovies);

  const { data: editions  } = await useFetch('/api/editions');
  const editionsData = useState('editions', () =>  sponsoren);

  const { data: pages } = await useFetch('/api/pages');
  const pagesData = useState('pages', () =>  pages);

  const { data: articles } = await useFetch('/api/articles');
  const articlesData = useState('articles', () =>  articles);

  const { data: artists } = await useFetch('/api/artists');
  const artistsData = useState('artists', () =>  artists);

  const { data: photographers } = await useFetch('/api/photographers');
  const photographersData = useState('photographers', () =>  photographers);

  const { data: galleries } = await useFetch('/api/galleries');
  const galleriesData = useState('galleries', () =>  galleries);


</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>