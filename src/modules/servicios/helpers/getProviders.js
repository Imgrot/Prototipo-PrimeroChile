import axios from 'axios'

export const getProviders = async (params = {}) => {
  try {
    return await axios.get('/api/providers', {
      params,
    })
  } catch (error) {
    return false
  }
}
