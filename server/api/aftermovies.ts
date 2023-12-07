export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const aftermoviesApi = config.public.aftermoviesApi;
  const { data: result } = await $fetch(aftermoviesApi);
  
 return result;
})
