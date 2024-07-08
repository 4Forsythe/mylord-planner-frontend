import { instance } from '@/api/interceptors'
import type { IAuth, AuthFormType } from '@/types/auth.types'
import { setAccessToken, removeAccessToken } from './auth-token.service'

class AuthService {
  private endpoint = '/auth'

  async login(data: AuthFormType) {
    const response = await instance.post<IAuth>(`${this.endpoint}/login`, data)

    const token = response.data.accessToken
    if (token) setAccessToken(token)

    return response
  }

  async register(data: AuthFormType) {
    const response = await instance.post<IAuth>(
      `${this.endpoint}/register`,
      data
    )

    const token = response.data.accessToken
    if (token) setAccessToken(token)

    return response
  }

  async logout() {
    const response = await instance.post<boolean>(`${this.endpoint}/logout`)

    if (response.data) removeAccessToken()

    return response
  }

  async getTokens() {
    const response = await instance.post<IAuth>(`${this.endpoint}/login/access`)

    const token = response.data.accessToken
    if (token) setAccessToken(token)

    return response
  }
}

export const authService = new AuthService()
