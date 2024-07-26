'use client'

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PlaceHolderDocument() {
  const router = useRouter();

  const handleClick = () => {
    // check if user free tier or they are over file limits
    router.push('/dashboard/upload')

  }
  

  return (
    <Button onClick={handleClick} className='flex flex-col items-center h-80
     bg-gray-400 w-64 drop-shadow-md hover:text-white dark:hover:bg-gray-900'>
      <PlusCircleIcon className='h-16 w-16 mb-5 '/>
      <p className=''>
        Add a Documents
      </p>
    </Button>
  )
}
