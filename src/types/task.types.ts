export enum PriorityEnum {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

export interface ITask {
  id: string

  name: string
  priority?: PriorityEnum
  isCompleted: boolean

  createdAt: string
  updatedAt: string
}

export type TaskFormType = Partial<Omit<ITask, 'id' | 'updatedAt'>>
