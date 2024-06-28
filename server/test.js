export default defineEventHandler(async event => {

  //Read body
  const body = await readBody(event)
  return body
})
