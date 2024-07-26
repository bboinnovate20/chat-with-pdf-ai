'use client'
import React, { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'


export default function LightDarkMode() {
    const [modeLight, setModeLight] = useState<boolean>(true)


    const {theme, setTheme } = useTheme()
    
    const setDefault = () => {
        if(theme == 'light') setModeLight(true)
        else setModeLight(false)
    }
    useEffect(() =>{
        setDefault();
    }, [modeLight])
  return (
    <div>
        <Switch 
        checked={!modeLight}
        
        onCheckedChange={(e) => {
            setModeLight(!e)
            if(!e == true) setTheme('light')
            else setTheme('dark')
            // if(!e) {

            // }
            // setTheme(!e == 'true' ? 'light': 'dark')
        }}
        className='overflow-hidden '
        >
            
            {
                modeLight == true ? <Sun className='w-4' /> : <Moon className='w-4 text-white'/>
            }

        </Switch>
    </div>
  )
}
