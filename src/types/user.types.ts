export interface IUser {
  id: string

  email: string
  name?: string

  createdAt: string
  updatedAt: string
}

export interface IUserResponse {
  user: IUser
  statistics: [
    {
      property: string
      count: number
    }
  ]
}

export type UserFormType = Partial<
  Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>
> & {
  password?: string
}
