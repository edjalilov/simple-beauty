import cn from './service.module.css'

import { ScrollArea, SegmentedControl } from '@mantine/core'
import { logEvent } from '@shared/lib/helpers/analytics'
import { useState } from 'react'

export const Service = () => {
  const [value, setValue] = useState('hair')

  const handleChange = (next: string) => {
    setValue(next)
    logEvent({ name: 'service_category_selected', params: { category: next } })
  }

  return (
    <ScrollArea type="never">
      <SegmentedControl
        color="var(--main-color)"
        value={value}
        onChange={handleChange}
        className={cn.segmentedControl}
        data={[
          { label: 'Волосы', value: 'hair' },
          { label: 'Ногти', value: 'nails' },
          { label: 'Брови', value: 'brows' },
          { label: 'Ресницы', value: 'eyelashes' },
          { label: 'Лицо', value: 'face' },
          { label: 'Тело', value: 'body' },
        ]}
      />
    </ScrollArea>
  )
}
