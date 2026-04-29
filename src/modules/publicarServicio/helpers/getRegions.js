import axios from 'axios'

export const getRegions = async () => {
  try {
    return await axios.get('/api/regions')
  } catch (error) {
    return false
  }
}
