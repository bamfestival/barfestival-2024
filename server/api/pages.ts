export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const pagesApi = config.public.pagesApi;
  const { data: result } = await $fetch(pagesApi);
  
 return result;
})
