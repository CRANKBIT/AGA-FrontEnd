const getSubdomain: () => string = () => {
  const host = window.location.hostname
  const parts = host.split('.')
  return parts[0]
}

export default getSubdomain
