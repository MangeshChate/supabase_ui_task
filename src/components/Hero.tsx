import React from 'react'
import { Badge } from './ui/badge'
import { BookmarkIcon } from "@radix-ui/react-icons"
const Hero = () => {
    return (
        <div className='h-[75vh]  mt-32'>
            <div className="container h-full flex items-center justify-center" >
                <div className='flex flex-col h-[75%] justify-between items-center'>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        <h1 className='flex flex-col text-6xl  text-center roboto-medium '>
                            <span>Build in a weekend</span>
                            <span className='text-[#3ECFA1]'>Scale to millions</span>
                        </h1>
                        <p className='text-center w-[50%] roboto-bold text-lg'>
                            Supabase is an open source Firebase alternative.
                            Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embedd
                        </p>
                        <div className='flex justify-center gap-3 roboto-medium '>
                            <Badge className='bg-green-700 p-2 text-white  hover:bg-green-800 cursor-pointer  border border-green-400 ' >
                                Start your project
                            </Badge>
                            <Badge variant={"outline"} className='p-2 items-center flex gap-2 hover:border-slate-400 cursor-pointer'>
                                <BookmarkIcon />
                                <span>Documentation</span>
                            </Badge>
                        </div>
                    </div>
                    <div className='flex justify-center items-end gap-3 flex-col'>
                        <div className='flex   gap-10 justify-evenly'>
                            
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmozilla.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2F1password.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpwc.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpika.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fhumata.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fkrea.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fudio.svg&w=32&q=75" alt="" />

                            
                        </div>
                        <div className='flex   gap-10 justify-evenly'>
                            
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpwc.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fkrea.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmozilla.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpika.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2F1password.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fudio.svg&w=32&q=75" alt="" />
                            <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fhumata.svg&w=32&q=75" alt="" />

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
