export interface ISession {
  id: string

  rounds?: ISessionRound[]
  isCompleted?: boolean

  createdAt: string
  updatedAt: string
}

export interface ISessionRound {
  id: string

  seconds: number
  isCompleted?: boolean

  createdAt: string
  updatedAt: string
}

export type SessionFormType = Partial<
  Omit<ISession, 'id' | 'createdAt' | 'updatedAt'>
>

export type SessionRoundFormType = Partial<
  Omit<ISessionRound, 'id' | 'createdAt' | 'updatedAt'>
>
