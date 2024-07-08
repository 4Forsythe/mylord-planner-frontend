export interface ISetting {
  id: string

  taskInterval: number
  breakInterval: number
  intervals: number

  createdAt: string
  updatedAt: string
}

export type SettingFormType = Partial<
  Omit<ISetting, 'id' | 'createdAt' | 'updatedAt'>
>
