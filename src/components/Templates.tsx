import React from 'react'
import { Badge } from './ui/badge'
import { ChatBubbleIcon, DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { WobbleCard } from './ui/wobble-card'
import { Card } from './ui/card'
import Link from 'next/link'
import { Link2, MessageCircle } from 'lucide-react'
const data = [
    {
        "title": "Stripe Subscriptions Starter",
        "description": "The all-in-one subscription starter kit for high-performance SaaS applications.",
        "action": "View Template"
    },
    {
        "title": "Next.js Starter",
        "description": "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.",
        "action": "View Template"
    },
    {
        "title": "AI Chatbot",
        "description": "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
        "action": "View Template"
    },
    {
        "title": "LangChain + Next.js Starter",
        "description": "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
        "action": "View Template"
    },
    {
        "title": "Flutter User Management",
        "description": "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
        "action": "View Template"
    },
    {
        "title": "Expo React Native Starter",
        "description": "An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.",
        "action": "View Template"
    }
]

const Templates = () => {
    return (
        <div className='container p-10 mt-10 roboto-medium'>
            <div className='text-center flex flex-col gap-5'>
                <span className='text-xl font-bold'>Start building in seconds</span>
                <p className='text-white opacity-50 text-sm'>
                    Kickstart your next project with templates built by us & our community
                </p>
                <div className='flex gap-5 justify-center '>
                    <Badge className='flex gap-2 p-2' variant='secondary'>
                        <span>Examples</span>

                    </Badge>
                    <Badge className='flex gap-2 p-2' variant='secondary'>
                        <span className=''>Official Github library </span>
                        <GitHubLogoIcon />
                    </Badge>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-10'>
                {data.map((card) => (
                    <Card key={card.title} className=' shadow-md flex flex-col'>
                        <div className='flex items-start flex-col'>
                            <div className='h-[50%] magicpattern p-12 gap-3 rounded-t-xl flex justify-center items-center '>
                                <GitHubLogoIcon className='w-8 h-8' />
                                <LinkedInLogoIcon className='w-8 h-8' />

                            </div>
                            <div className='flex h-[50%] flex-col gap-3  justify-center p-6 items-start'>
                                <span className='text-xl roboto-bold'>{card.title}</span>
                                <p className="text-sm text-opacity-50 ">{card.description}</p>
                                <span className="text-sm text-opacity-50  flex items-center gap-3">
                                    {card.action} <Link2 />
                                </span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Templates
