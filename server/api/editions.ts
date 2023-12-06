export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const editionsApi = config.public.editionsApi;
  const { data: result } = await $fetch(editionsApi);
  
 return result;
})
