'use client'

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Image from "next/image";
import { CircleArrowDownIcon, RocketIcon } from 'lucide-react';

export default function FileUploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles);
      }, []);

    //   [
    //     File {
    //       path: 'Computer science distilled.pdf',
    //       name: 'Computer science distilled.pdf',
    //       lastModified: 1698476952000,
    //       lastModifiedDate: new Date('2023-10-28T07:09:12.000Z'),
    //       webkitRelativePath: '',
    //       size: 7151937,
    //       type: 'application/pdf'
    //     }
    //   ]
      const {getRootProps, getInputProps, isDragActive, isFocused} = useDropzone({onDrop})
    
      return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            <div {...getRootProps()} className={`p-10 border-2 border-dashed border-primary dark:border-gray-400 mt-10 w-[90%] 
                    text-primary rounded-lg h-96 flex flex-items-center justify-center items-center
                    dark:bg-gray-500 dark:text-black ${isFocused || isDragActive ? 'bg-gradient-to-r from-blue-400 to-blue-200': 'bg-blue-100'}`}>
            <input {...getInputProps()} />
            <div>
                {
                    isDragActive ?
                    <div className="grid place-content-center place-items-center">
                        <RocketIcon className='h-14 w-14 animate-ping'/>
                        <p className="font-semibold">Dropping your file...</p>
                    </div>
                    :
                    <div className="grid place-content-center place-items-center text-center">
                        <CircleArrowDownIcon className='h-14 w-14 animate-bounce'/>
                        <p className="font-semibold">Drag and drop some files here, or click to select files</p>
                    </div>
                }

            </div>
            </div>

        </div>
      )
}
