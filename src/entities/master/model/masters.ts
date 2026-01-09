import type { IMaster } from './types'

export const masters: IMaster[] = [
  {
    id: '1',
    name: 'Мария Петрова',
    services: ['hair'],
    type: 'master',
    phone: '+998991234567',
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Алиса Сидорова',
    services: ['hair', 'nails'],
    type: 'master',
    phone: '+998991234567',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Анна Иванова',
    services: ['eyelashes', 'brows'],
    type: 'master',
    phone: '+998991234567',
    avatarUrl: null,
  },
]
