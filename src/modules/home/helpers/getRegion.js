import axios from 'axios'

export const getRegion = async (slug) => {
  try {
    return await axios.get(`/api/regions/${slug}`)
  } catch (error) {
    return false
  }
}
