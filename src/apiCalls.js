export const fetchApi = () => {
  return fetch(`https://mediterranean-recipes-api.vercel.app.json?api-key=${process.env.PROJECT_ID}`)
}