import cn from './service.module.css'

import { ScrollArea, SegmentedControl } from '@mantine/core'
import { useState } from 'react'

export const Service = () => {
  const [value, setValue] = useState('hair')

  return (
    <ScrollArea type="never">
      <SegmentedControl
        color="var(--main-color)"
        value={value}
        onChange={setValue}
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
