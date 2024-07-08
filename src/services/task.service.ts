import { instanceWithAuth } from '@/api/interceptors'
import type { ITask, TaskFormType } from '@/types/task.types'

class TaskService {
  private endpoint = '/task'

  async getAll() {
    const response = await instanceWithAuth.get<ITask[]>(this.endpoint)
    return response
  }

  async create(data: TaskFormType) {
    const response = await instanceWithAuth.post<ITask>(this.endpoint, data)
    return response
  }

  async update(id: string, data: TaskFormType) {
    const response = await instanceWithAuth.patch<ITask>(
      `${this.endpoint}/${id}`,
      data
    )
    return response
  }

  async remove(id: string) {
    const response = await instanceWithAuth.delete<ITask>(
      `${this.endpoint}/${id}`
    )
    return response
  }
}

export const taskService = new TaskService()
