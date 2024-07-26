'use client'

import { ClerkFormGroup, ClerkSubmit } from '@/components/auth_component'
import Logo from '@/components/logo'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'


export default function SignInPage() {
  return (
    <article className='bg-white grid place-items-center h-screen place-content-center md:grid-flow-col p-5 md:p-0 md:grid-cols-[2fr_1fr] '>
      <SignInSection/>
      <SignInSideBar/>
    </article>
  )
}



function SignInSection() {
  return (
    <div>
        <SignIn.Root>
            <Logo/>
           <div className='h-[400px] max-w-[400px] mt-10  lg:w-[400px] w-full'>
            <SignIn.Step name="start" className='animate-slide-down'>
              <div className="mt-10">
                <div className="mb-5">
                <h1 className='font-medium text-lg tracking-tight'>Welcome back! </h1>
                <p className='text-gray-700 text-sm'>Start leveraging AI Potential with your PDFs </p>
                </div>
        
      
                <OtherStrategy isLayout='up'/>
                <div className='mt-5 max-w-[400px] md:w-[400px] '>
    

                  <Clerk.Field name="identifier" className='mt-5'>
                    <Clerk.Label aria-placeholder='imusa@gmail.com' className='font-semibold pb-2'>Email</Clerk.Label>
                    <Clerk.Input placeholder='e.g. imusa@gmail.com' className='transition-all w-full  border-solid border rounded p-2 focus:to-blue-950' />
                    <Clerk.FieldError  >
                      {({message}) => <p className='text-red-700 py-2 text-sm'>{message}</p>}
                      </Clerk.FieldError>
                  </Clerk.Field>
                  

                  <SignIn.Action submit 
                    className='w-full bg-blue-900 h-12 rounded p-2 py-3 my-3 text-white hover:bg-blue-700 transition-all grid place-content-center'>
                        <Clerk.Loading>
                        {(isLoading) => !isLoading ? "Continue" : <Image
                          src="/icons/spinner.svg"
                          width={40}
                          height={40}
                          alt='spinner'
                        />}
                      </Clerk.Loading>
                      
                  </SignIn.Action>
                </div>
              </div>

            </SignIn.Step>

            <SignIn.Step name="verifications" className='max-w-[400px] md:w-[400px] animate-slide-down' >
              
            <div >
              <SignIn.Strategy name='password'>
              <div className="mt-10">
                <h1 className='font-medium text-lg tracking-tight mb-10'>Welcome <SignIn.Salutation />!</h1>
              </div>
              <div  className='w-full text-left'>
                  <Clerk.Field name="password">
                    <Clerk.Label aria-placeholder='password' className='font-semibold pb-2 '>Password</Clerk.Label>
                    <Clerk.Input placeholder='password' className='my-2 transition-all w-full  border-solid border rounded p-2 focus:to-blue-950'/>
                    <Clerk.FieldError  >
                      {({message}) => <p className='text-red-700 py-2 text-sm'>{message}</p>}
                      </Clerk.FieldError>
                  </Clerk.Field>

                  <SignIn.Action navigate="forgot-password" className='w-full text-right text-red-500'>
                    <div className=''>Forget Password</div>  
                  </SignIn.Action>
                      
                      <SignIn.Action submit 
                      className='w-full bg-blue-900 h-12 rounded p-2 py-3 my-3 text-white hover:bg-blue-700 transition-all grid place-content-center'>
                        <Clerk.Loading>
                              {(isLoading) => !isLoading ? "Let's continue the Magic!" : <Image
                                src="/icons/spinner.svg"
                                width={40}
                                height={40}
                                alt='spinner'
                              />}
                    </Clerk.Loading>
                  </SignIn.Action>
                </div> 
              </SignIn.Strategy>                 
              
               <SignIn.Strategy name="reset_password_email_code">
               <h1 className='font-medium text-lg text-green-500 tracking-tight mb-10'>Successfully Sent Email Verification Code!</h1>            
                   <ClerkFormGroup name="code" label='Verification code' placeholder='Enter your Verification Code'/>
                    <ClerkSubmit label="Verify"/>
               </SignIn.Strategy>                    
                      
              <OtherStrategy isLayout='down'/>               
            </div>
                
            </SignIn.Step>

            <SignIn.Step name="forgot-password" className='animate-slide-down'>
            <div className="mb-5">
                <h1 className='font-medium text-lg tracking-tight'>Reset in minutes </h1>
                <p className='text-gray-700 text-sm'>Send password reset instruction your Email </p>
                </div>
                
              <SignIn.SupportedStrategy name="reset_password_email_code">
                      <div  className='w-full bg-blue-900 h-12 rounded p-2 py-3 my-3 text-white hover:bg-blue-700 transition-all grid place-content-center'>
                          <Clerk.Loading>
                          {(isLoading) => !isLoading ? "Send Password Reset to Email" : <Image
                            src="/icons/spinner.svg"
                          width={40}
                          height={40}
                          alt='spinner'
                        />}
                      </Clerk.Loading>
                    </div>
                      
              </SignIn.SupportedStrategy>
            </SignIn.Step>
          
            <SignIn.Step name="reset-password"  className='w-full'>
                    <div className="mb-5">
                      <h1 className='font-medium text-lg tracking-tight'>Password Reset Instruction is sent</h1>
                      <p className='text-gray-700 text-sm'> </p>
                      </div>

                  <ClerkFormGroup name="password" label='New Password' placeholder='Enter your new password'/>
                  <ClerkFormGroup name="confirmPassword" label='Confirm Password' placeholder='Confirm your new password'/>
                  <ClerkSubmit label="Update password"/>
                 
            </SignIn.Step>   


            
           </div>

        </SignIn.Root>
      </div>
  )
}







function SignInSideBar() {
  return (
    
    <div className='hidden md:block  bg-blue-700 w-full h-full p-4 text-white overflow-hidden'>
        <div>
          <p className="font-extrabold text-3xl mt-12">Engage with your PDFs</p>
          <p className='text-blue-300'>Make your PDFs Interactive and Intuitive!</p>
          <div className='ml-[-100px] opacity-50 rotate-[-12deg] mt-20'>
              <Image
                  src="/images/chat-with-pdf.jpg"
                  className='max-w-[60rem]'
                  width={550}
                  height={400}
                  alt='Chat with pdf image'
                  />
          </div>

        </div>
      </div>
    

  )
}

const OtherStrategy = ({isLayout}: {isLayout: 'up' | 'down'}) => (
  <div>  
    {isLayout == 'up' &&
    <>
            <SignIn.Action navigate="choose-strategy" className='w-full'>
            <div className='grid grid-cols-2 gap-3 justify-between w-full mb-2'>
                <Clerk.Connection name="apple" className="border rounded p-2 grid gap-5 grid-flow-col place-content-center">
                  <Image src="/icons/apple-logo.png" width={20} height={20} alt='apple logo' />
                  <p className='font-semibold' >Apple</p>
                </Clerk.Connection>
                <Clerk.Connection name="google" className='border rounded p-2 grid gap-5 grid-flow-col place-content-center'>
                <Image src="/icons/google-logo.png" width={20} height={20} alt='google logo' />
                  <p className='font-semibold'>Google</p>
                </Clerk.Connection>
            </div>  
            <div className='flex w-full justify-between gap-2 place-items-center'>
              <hr className='border-[0.01rem] border-gray-300 w-full'/>
              <p className='min-w-max'>or sign in with email</p>
              <hr className='border-[0.01rem] border-gray-300 w-full'/>
            </div>
          </SignIn.Action>
    </>
               

     }
    
      {isLayout == 'down' &&
      <>
      
              <div className='flex w-full justify-between gap-2 place-items-center mt-2'>
              <hr className='border-[0.01rem] border-gray-300 w-full'/>
              <p className='min-w-max'>or sign in with email</p>
              <hr className='border-[0.01rem] border-gray-300 w-full'/>
            </div>
            <SignIn.Action navigate="choose-strategy" className='w-full'>
            <div className='grid grid-cols-2 gap-3 justify-between w-full mt-2'>
                <Clerk.Connection name="apple" className="border rounded p-2 grid gap-5 grid-flow-col place-content-center">
                  <Image src="/icons/apple-logo.png" width={20} height={20} alt='apple logo' />
                  <p className='font-semibold' >Apple</p>
                </Clerk.Connection>
                <Clerk.Connection name="google" className='border rounded p-2 grid gap-5 grid-flow-col place-content-center'>
                <Image src="/icons/google-logo.png" width={20} height={20} alt='google logo' />
                  <p className='font-semibold'>Google</p>
                </Clerk.Connection>
            </div>  
            
          </SignIn.Action>
      </>

     }       
  </div>
)