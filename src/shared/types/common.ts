export enum Locales {
  ru = 'ru',
  uz = 'uz',
  en = 'en',
}

export type TFunction = (key: string) => string

export type LocaleBasedData<T> = Record<Locales, T>

export interface INavigationItem {
  path: string
  icon: React.ComponentType<{ size?: number; stroke?: number }>
  iconFilled: React.ComponentType<{ size?: number; stroke?: number }>
  label: string
}
