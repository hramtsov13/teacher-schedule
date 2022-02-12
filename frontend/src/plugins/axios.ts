export const token = import.meta.env.VITE_APP_TOKEN
export const baseURL: string = (() => {
  const { VITE_APP_API_URL } = import.meta.env
  return `${VITE_APP_API_URL}`
})()
