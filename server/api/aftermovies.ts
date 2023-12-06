export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const photographersApi = config.public.photographersApi;
  const { data: result } = await $fetch(photographersApi);
  
 return result;
})
