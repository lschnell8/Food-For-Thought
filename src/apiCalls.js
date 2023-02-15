export const fetchApi = () => {
  return fetch(`https://mediterranean-recipes-api.vercel.app.json?api-key=${process.env.REACT_APP_API_KEY}`)
}