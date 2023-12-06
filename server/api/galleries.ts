export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const galleriesApi = config.public.galleriesApi;
  const { data: result } = await $fetch(galleriesApi);
  
 return result;
})
