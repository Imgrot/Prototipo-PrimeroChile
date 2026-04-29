const DEFAULT_COLLECTION_KEYS = [
  'data',
  'respuesta',
  'resultado',
  'results',
  'items',
  'registros',
  'records',
  'rows',
]

const buscarColeccion = (data, keys, visited) => {
  if (Array.isArray(data)) return data
  if (!data || typeof data != 'object') return null
  if (visited.has(data)) return null

  visited.add(data)

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const resultado = buscarColeccion(data[key], DEFAULT_COLLECTION_KEYS, visited)
      if (resultado) return resultado
    }
  }

  for (const key of DEFAULT_COLLECTION_KEYS) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const resultado = buscarColeccion(data[key], DEFAULT_COLLECTION_KEYS, visited)
      if (resultado) return resultado
    }
  }

  for (const value of Object.values(data)) {
    if (Array.isArray(value)) return value
  }

  return null
}

export const normalizarColeccion = (data, keys = []) => {
  return buscarColeccion(data, keys, new WeakSet()) || []
}
