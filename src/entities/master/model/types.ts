export interface IMaster {
  id: string
  name: string
  services: string[]
  type: 'master' | 'client'
  phone: string
  avatarUrl: string | null
}
