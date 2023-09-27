'use client'

import GroupHug from '@yomo/group-hug-react';
import { createPresence } from '@yomo/presence';

export default function GH() {
  const id = (new Date).valueOf().toString(36)
  const pp = createPresence('https://lo.yomo.dev:8443/v1', {
    publicKey: 'PiHYRKapgfmHxthWmWlqpAcdYdxCtPtl2jmwrzig',
    id: id,
    debug: true,
  })

  return (
    <div>
      <GroupHug presence={pp} channel='xxo' id={id} name={id} />
    </div>
  )
}