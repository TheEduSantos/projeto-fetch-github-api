import { baseUrl, quantity } from '../variable.js'

async function getRepositories(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?${quantity}`)
  return await response.json()
}

export { getRepositories }
