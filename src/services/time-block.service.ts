import { instanceWithAuth } from '@/api/interceptors'
import type { ITimeBlock, TimeBlockFormType } from '@/types/time-block.types'

class TimeBlockService {
  private endpoint = '/time-block'

  async getAll() {
    const response = await instanceWithAuth.get<ITimeBlock[]>(this.endpoint)
    return response
  }

  async create(data: TimeBlockFormType) {
    const response = await instanceWithAuth.post<ITimeBlock>(
      this.endpoint,
      data
    )
    return response
  }

  async update(id: string, data: TimeBlockFormType) {
    const response = await instanceWithAuth.patch<ITimeBlock>(
      `${this.endpoint}/${id}`,
      data
    )
    return response
  }

  async updateOrder(ids: string[]) {
    const response = await instanceWithAuth.patch<ITimeBlock>(
      `${this.endpoint}/order`,
      { ids }
    )
    return response
  }

  async remove(id: string) {
    const response = await instanceWithAuth.delete<ITimeBlock>(
      `${this.endpoint}/${id}`
    )
    return response
  }
}

export const timeBlockService = new TimeBlockService()
