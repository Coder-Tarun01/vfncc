// Utility to handle asset paths with base URL
export const getAssetPath = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  // If path starts with /, remove it to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Ensure baseUrl ends with / (Vite's BASE_URL already includes trailing slash)
  return `${baseUrl}${cleanPath}`
}

