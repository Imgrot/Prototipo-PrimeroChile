import axios from 'axios'

export const getComunas = async () => {
  try {
    return await axios.get('/api/comunas')
  } catch (error) {
    return false
  }
}
