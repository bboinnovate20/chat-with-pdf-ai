"use client"
import useScrollAnimation from '@/util/useScrollAnimation';
import { Layers3 } from 'lucide-react'
import React from 'react'
import SectionHeader from './section-header';

export default function CustomSingleFeature({title, icon, content}: {title: string, icon: React.ReactNode, content: string}) {
  return (
    <div className='md:min-h-32 md:min-w-[276px] grid grid-flow-col grid-cols-[1fr_5fr] overflow-hidden rounded-lg border border-gray-300 bg-white min-h-24'>
        <div className='bg-gradient-to-r from-blue-200 to-blue-300 grid place-content-center py-4'>
            
           <div className='bg-white rounded-lg text-primary p-1 relative border-2 border-blue-300'
                    style={{boxShadow: "0 0 0 1px white"}} >
                        {icon}
            {/* <Layers3  size={24}/> */}
            </div>
            

        </div>
        <div className='p-2 pl-5 grid place-content-center'>
            <p className='font-bold pb-2'>{title}</p>
            <p className='text-sm'>{content}</p>
        </div>

    </div>
  )
}


export function Features ({features}: {features: any[]}) {
  
    const [ref, isVisible] = useScrollAnimation();
    
   return (
    <div >
      {/* <CustomSingleFeature/> */}
      <SectionHeader/>
      <dl className='md:grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4  '>
        {features.map(({title, icon, content}, index) => 
            <dt key={index} ref={(el: HTMLElement) => { ref.current[index] = el; }}
              style={{
                transform:  `translateY(${-10}px`,
              }}
            className="mt-4 opacity-0 fill-mode-forwards" > <CustomSingleFeature key={index} title={title} icon={icon} content={content} /> </dt> ) }
  
      </dl>
    </div>)
  
  
  
}