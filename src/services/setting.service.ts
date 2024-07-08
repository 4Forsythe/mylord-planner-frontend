import { instanceWithAuth } from '@/api/interceptors'
import type { ISetting, SettingFormType } from '@/types/setting.types'

class SettingService {
  private endpoint = '/setting/me'

  async getSettings() {
    const response = await instanceWithAuth.get<ISetting>(this.endpoint)
    return response.data
  }

  async update(data: SettingFormType) {
    const response = await instanceWithAuth.patch<ISetting>(this.endpoint, data)
    return response.data
  }

  async reset() {
    const response = await instanceWithAuth.delete<ISetting>(this.endpoint)
    return response.data
  }
}

export const settingService = new SettingService()
