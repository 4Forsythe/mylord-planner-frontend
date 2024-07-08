import { instanceWithAuth } from '@/api/interceptors'
import type {
  ISession,
  ISessionRound,
  SessionFormType,
  SessionRoundFormType
} from '@/types/session.types'

class SessionService {
  private endpoint = '/session'

  async getDailySession() {
    const response = await instanceWithAuth.get<ISession>(this.endpoint)
    return response
  }

  async create() {
    const response = await instanceWithAuth.post<ISession>(this.endpoint)
    return response
  }

  async update(id: string, data: SessionFormType) {
    const response = await instanceWithAuth.patch<ISession>(
      `${this.endpoint}/${id}`,
      data
    )
    return response
  }

  async updateRound(id: string, data: SessionRoundFormType) {
    const response = await instanceWithAuth.patch<ISessionRound>(
      `${this.endpoint}/round/${id}`,
      data
    )
    return response
  }

  async remove(id: string) {
    const response = await instanceWithAuth.delete<ISession>(
      `${this.endpoint}/${id}`
    )
    return response
  }
}

export const sessionService = new SessionService()
