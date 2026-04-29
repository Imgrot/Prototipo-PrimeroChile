export const verificarRespuesta = (response) => {
  if (!response) return false

  if (response.status == 200 || response.status == 201 || response.status == 206) {
    return response.data
  }

  return false
}
