export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const sponsorenApi = config.public.sponsorenApi;
  const { data: result } = await $fetch(sponsorenApi);
  
 return result;
})
