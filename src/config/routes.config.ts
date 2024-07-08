class DASHBOARD {
  private BASE_URL = '/dashboard'

  HOME = this.BASE_URL
  TODOS = `${this.BASE_URL}/todos`
  HABITS = `${this.BASE_URL}/habits`
  TIMER = `${this.BASE_URL}/timer`
  TIME_BLOCKING = `${this.BASE_URL}/time-blocking`
  SETTINGS = `${this.BASE_URL}/settings`
}

export const DASHBOARD_ROUTE = new DASHBOARD()
