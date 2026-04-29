import axios from 'axios'

export const postProvider = async (payload) => {
  try {
    return await axios.post('/api/providers/create', payload)
  } catch (error) {
    return error?.response || false
  }
}
