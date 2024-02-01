import Image from 'next/image'
import React from 'react'

export default function Remote() {
  return (
        <div className='flex'>
        <Image src='https://images.unsplash.com/photo-1644077112345-919855dbcb65?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="an aeroplane floating above the clouds" width='500' height='400'/>
        <Image src='https://i.pinimg.com/564x/83/46/a0/8346a08695675b4fceda880cf51dab49.jpg' alt="University, Windsor, ON, Canada" width='500' height='400'/>
        <Image src='https://i.pinimg.com/564x/ce/49/18/ce49182ea44a7ffef8f87c850addb16e.jpg' alt="money" width='600' height='600'/>
        </div>
  )
}
