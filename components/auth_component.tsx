
import React from 'react'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'

export function ClerkFormGroup({label, placeholder, name}: {label: string, placeholder: string, name: string}) {
  return (
    <Clerk.Field name={name} className='mt-5'>
                  <Clerk.Label aria-placeholder={placeholder} className='font-semibold pb-2'>{label}</Clerk.Label>
                  <Clerk.Input placeholder={placeholder} className='bg-white outline-none focus:border-primary 
                  focus:shadow-md focus:shadow-blue-100 transition-all w-full  
                  border-solid border rounded p-2 focus:to-blue-950 dark:bg-white dark:text-black text-black' />
                  <Clerk.FieldError  >
                    {({message}) => <p className='text-red-700 py-2 text-sm'>{message}</p>}
                    </Clerk.FieldError>
                </Clerk.Field>
  )
}

export function ClerkSubmit({label }: {label: string}) {

    return (
        <SignIn.Action submit 
        className='w-full bg-blue-900 h-12 rounded p-2 py-3 px-3 my-3 text-white hover:bg-blue-700 transition-all grid place-content-center'>
            <Clerk.Loading>
            {(isLoading) => !isLoading ? label : <Image
              src="/icons/spinner.svg"
              width={40}
              height={40}
              alt='spinner'
            />}
          </Clerk.Loading>
          
      </SignIn.Action>
    )
  }
  

