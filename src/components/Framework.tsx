
import React from 'react'
import { Badge } from './ui/badge'

const Framework = () => {
  return (
    <div className='container flex flex-col justify-center items-center text-center gap-5 roboto-medium'>
        
            <span className="text-sm  opacity-50">
                    Works seamlessly with + frameworks
            </span>
            <div className="flex gap-3">
                
                    <Badge variant={"secondary"} className='p-2'>NextJs</Badge>
                    <Badge variant={"secondary"} className='p-2'>ReactJs</Badge>
                    <Badge variant={"secondary"} className='p-2'>NuxtJs</Badge>
                    <Badge variant={"secondary"} className='p-2'>Flutter</Badge>
                    <Badge variant={"secondary"} className='p-2'>Sevite</Badge>
                    <Badge variant={"secondary"} className='p-2'>Vue</Badge>


                
            </div>
     
    </div>
  )
}

export default Framework
