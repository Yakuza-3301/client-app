interface LocationData {
  ip: string
  country: string
  city: string
  region: string
}

export const getLocationDetails = async (): Promise<LocationData> => {
  const response = await fetch('https://ipapi.co/json/')
  const data = await response.json()
  return {
    ip: data.ip,
    country: data.country_name,
    city: data.city,
    region: data.region
  }
}