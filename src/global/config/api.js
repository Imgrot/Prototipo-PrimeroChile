import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || ''

const controllers = new Set()

export const cancelAllRequests = () => {
  controllers.forEach((controller) => controller.abort())
  controllers.clear()
}

export const isCanceled = (error) => {
  return error?.code == 'ERR_CANCELED' || error?.name == 'CanceledError'
}

axios.interceptors.request.use((config) => {
  if (!config.signal) {
    const controller = new AbortController()
    config.signal = controller.signal
    config.__abortController = controller
    controllers.add(controller)
  }

  return config
})

axios.interceptors.response.use(
  (response) => {
    const controller = response.config?.__abortController
    if (controller) controllers.delete(controller)
    return response
  },
  (error) => {
    const controller = error.config?.__abortController
    if (controller) controllers.delete(controller)
    return Promise.reject(error)
  },
)
