import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='text-2xl font-bold'>
             <span className='text-neutral'>Tech</span><span className='text-primary'>Easy</span>
    </Link>
  )
}

export default Logo