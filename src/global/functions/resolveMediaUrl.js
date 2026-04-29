const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value)

export const resolveMediaUrl = (path, fallback = '') => {
  if (!path) return fallback
  if (isAbsoluteUrl(path)) return path

  if (path.startsWith('/assets/')) {
    return path
  }

  const mediaBase = import.meta.env.VITE_MEDIA_BASE_URL || import.meta.env.VITE_API_BASE_URL || ''
  if (!mediaBase) return path

  const normalizedBase = mediaBase.endsWith('/') ? mediaBase.slice(0, -1) : mediaBase
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}
