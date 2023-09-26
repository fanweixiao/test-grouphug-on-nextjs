'use client'

import GroupHug from '@yomo/group-hug-react';
import { createPresence } from '@yomo/presence';

const id = (new Date).valueOf().toString(36)
const pp = createPresence('https://lo.yomo.dev:8443/v1', {
  publicKey: 'pk_live',
  id: id,
  debug: true,
})
console.log('pp------------->', id)

export default function GH() {

  return (
    <div>
      <GroupHug presence={pp} channel='xxo' id={id} name={id} />
    </div>
  )
}