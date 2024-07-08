import { IUser } from './user.types'

export interface IAuth {
  user: IUser
  accessToken: string
}

export type AuthFormType = {
  email: string
  name?: string
  password: string
}
