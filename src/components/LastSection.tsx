import React from 'react'
import { Badge } from './ui/badge'

const LastSection = () => {
    return (
        <div className='container h-[25vh] flex justify-center gap-5 items-center flex-col p-10'>
            <div className='gap-2 flex'>
                <span className='text-white text-opacity-50 text-3xl roboto-bold '>Build in a weekend,</span>
                <span className='text-3xl roboto-bold'>scale to millions</span>

            </div>
            <Badge className='bg-green-700 text-white  hover:bg-green-800 cursor-pointer  border border-green-400' >
                Start your project
            </Badge>
            
        </div>
    )
}

export default LastSection
