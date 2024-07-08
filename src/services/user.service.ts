import { instanceWithAuth } from '@/api/interceptors'
import type { IUser, IUserResponse, UserFormType } from '@/types/user.types'

class UserService {
  private endpoint = '/user/me'

  async getProfile() {
    const response = await instanceWithAuth.get<IUserResponse>(this.endpoint)
    return response.data
  }

  async update(data: UserFormType) {
    const response = await instanceWithAuth.patch<IUser>(this.endpoint, data)
    return response.data
  }

  async remove() {
    const response = await instanceWithAuth.delete<IUser>(this.endpoint)
    return response.data
  }
}

export const userService = new UserService()
