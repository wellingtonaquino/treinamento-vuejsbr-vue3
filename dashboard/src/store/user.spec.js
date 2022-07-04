import useStore from '@/hooks/useStore'
import { cleanCurrentUser, resetUserStore, setApiKey, setCurrentUser } from './user'

let store

describe('UserStore', () => {
  beforeEach(() => {
    store = useStore()
  })
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
  })

  it('should set apikey on current user', () => {
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
