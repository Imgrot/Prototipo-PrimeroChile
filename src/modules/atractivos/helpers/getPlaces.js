import axios from 'axios'

export const getPlaces = async (params = {}) => {
  try {
    return await axios.get('/api/places', {
      params,
    })
  } catch (error) {
    return false
  }
}
