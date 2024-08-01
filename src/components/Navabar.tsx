import React from 'react'
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from './ui/badge';

import Image from 'next/image';
import { NavigationMenu } from './ui/navigation-menu';

const Navabar = () => {
    return (
        <div className='w-full border-b border-secondary fixed top-0 bg-opacity-70 backdrop-blur-lg z-50'>
            <div className='container justify-between flex p-4'>
                <div className='flex gap-10 items-center'>
                    <div className='logo text-xl font-bold flex items-center gap-2'>
                        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
                        <span>supabase</span>
                    </div>
                    <div className='text-sm font-semibold flex gap-5'>
                        <NavigationMenu>Product</NavigationMenu>
                        <span>Developers</span>
                        <span>Pricing</span>
                        <span>Docs</span>
                        <span>Blog</span>
                    </div>
                </div>

                <div className='flex items-center text-sm gap-2'>
                    <Badge variant={"outline"} className='flex items-center gap-2     '>
                        <GitHubLogoIcon />
                        <span className='text-sm text-slate-600'>69.k</span>
                    </Badge>
                    <Badge>
                        Sign In
                    </Badge>
                    <Badge className='bg-green-700 text-white  hover:bg-green-800 cursor-pointer  border border-green-400' >
                        Start your project
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Navabar
