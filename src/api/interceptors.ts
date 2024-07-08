import axios, { type CreateAxiosDefaults } from 'axios'
import {
  getAccessToken,
  removeAccessToken
} from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'

import { onCatch } from './catch-error'

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

const instance = axios.create(options)
const instanceWithAuth = axios.create(options)

instanceWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

instanceWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const req = error.config

    if (
      (error?.response?.status === 401 ||
        onCatch(error) === 'jwt expired' ||
        onCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      req._isRetry = true

      try {
        await authService.getTokens()
        return instanceWithAuth.request(req)
      } catch (error) {
        onCatch(error) === 'jwt expired' && removeAccessToken()
      }
    }

    throw error
  }
)

export { instance, instanceWithAuth }
