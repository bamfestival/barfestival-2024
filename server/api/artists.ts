export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const artistsApi = config.public.artistsApi;
  const { data: result } = await $fetch(artistsApi);
  
 return result;
})
