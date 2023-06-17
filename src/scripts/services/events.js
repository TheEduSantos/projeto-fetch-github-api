import { baseUrl, quantity } from '../variable.js'

async function getEvents(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events?${quantity}`)
  return await response.json()
}

export { getEvents }
