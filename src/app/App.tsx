import './config/i18n'

import './styles/global.css'

import { WithMantine } from './providers/with-mantine'
import { WithQuery } from './providers/with-query'
import { WithRouter } from './providers/with-router'
import { initBridge } from '@shared/lib/helpers/analytics'

initBridge()

export const App = () => {
  return (
    <WithMantine>
      <WithQuery>
        <WithRouter />
      </WithQuery>
    </WithMantine>
  )
}
