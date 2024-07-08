export interface ITimeBlock {
  id: string

  name: string
  color?: string
  duration: number
  order: number

  createdAt: string
  updatedAt: string
}

export type TimeBlockFormType = Partial<
  Omit<ITimeBlock, 'createdAt' | 'updatedAt'>
>
