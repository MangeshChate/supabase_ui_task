import React from 'react';
import { Badge } from './ui/badge';
import { ChatBubbleIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import { WobbleCard } from './ui/wobble-card'; // Assuming this is your custom component
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const cardsData = [
    {
        id: 1,
        username: '@thatguy_tex',
        content: 'Working with @supabase has been one of the best dev experiences I\'ve had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects.',
    },
    {
        id: 2,
        username: '@dmalakoksal',
        content: 'Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly 🙌🏼',
    },
    {
        id: 3,
        username: '@michaeldecover',
        content: 'I\'m not sure what magic @supabase is using but we\'ve migrated @happyteamsdotio database to @supabase from @heroku and it\'s much much faster at half the cost.',
    },
    {
        id: 7,
        username: '@kevcodez',
        content: 'Over the course of a few weeks, we migrated 125.000 users (email/pw, Gmail, Facebook, Apple logins) from Auth0 to @supabase and have now completed the migration. I\'m just glad this migration is done 🤯 Went well, besides a few edge cases (duplicate indices / constraints)',
    },
    {
        id: 2,
        username: '@dmalakoksal',
        content: 'Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly 🙌🏼',
    },
    {
        id: 3,
        username: '@michaeldecover',
        content: 'I\'m not sure what magic @supabase is using but we\'ve migrated @happyteamsdotio database to @supabase from @heroku and it\'s much much faster at half the cost.',
    },
    {
        id: 7,
        username: '@kevcodez',
        content: 'Over the course of a few weeks, we migrated 125.000 users (email/pw, Gmail, Facebook, Apple logins) from Auth0 to @supabase and have now completed the migration. I\'m just glad this migration is done 🤯 Went well, besides a few edge cases (duplicate indices / constraints)',
    }
    ,
    {
        id: 2,
        username: '@dmalakoksal',
        content: 'Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly 🙌🏼',
    },
    {
        id: 3,
        username: '@michaeldecover',
        content: 'I\'m not sure what magic @supabase is using but we\'ve migrated @happyteamsdotio database to @supabase from @heroku and it\'s much much faster at half the cost.',
    },
];

const Community = () => {
    return (
        <div className='container p-6 mt-10'>
            <div className='text-center flex flex-col gap-5'>
                <span className='text-xl font-bold'>Join the community</span>
                <p className='text-white opacity-50 text-sm'>
                    Supported by a network of early advocates, contributors, and champions.
                </p>
                <div className='flex gap-5 justify-center'>
                    <Badge className='flex gap-2 p-2' variant='secondary'>
                        <span>Github discussion </span>
                        <ChatBubbleIcon />
                    </Badge>
                    <Badge className='flex gap-2 p-2' variant='secondary'>
                        <span>Discord </span>
                        <DiscordLogoIcon />
                    </Badge>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
                {cardsData.map((card) => (
                    <WobbleCard key={card.id} className='p-6   shadow-md rounded-lg flex flex-col'>
                        <div className='flex items-start flex-col'>
                            <div className='flex items-start'>

                            <div className='mr-4'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex-1'>
                                <div className='flex items-center'>
                                    <span className='font-bold'>{card.username}</span>
                                </div>
                            </div>
                            </div>
                                <p className='mt-2 opacity-50 text-sm'>{card.content}</p>
                        </div>
                    </WobbleCard>
                ))}
            </div>
        </div>
    );
};

export default Community;
