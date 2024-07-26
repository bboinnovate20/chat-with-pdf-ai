export const dynamic = 'force-dynamic';

import Documents from '@/components/document';
import Header from '@/components/header'
import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

export default function Dashboard() {
  return (
      <div className='h-full mx-auto'>
          <h1 className='text-3xl bg-gray-100 dark:bg-gray-500 font-extralight text-primary dark:text-black p-5'>My Documents</h1>
          
          
          <Documents/>

      </div>
  )
}
