export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const articlesApi = config.public.articlesApi;
  const { data: result } = await $fetch(articlesApi);
  
 return result;
})
