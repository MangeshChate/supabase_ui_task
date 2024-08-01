import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Database, FunctionSquare, Lock, Pin } from "lucide-react";

const Grid = () => {
    return (
        <div className="min-h-screen container p-6 flex flex-col gap-5">
            <div className='grid grid-cols-4  container gap-5'>
                <Card className="col-span-2 p-10 justify-between flex border-slate-700">
                    <div className="flex flex-1 flex-col justify-between">
                        <div>

                            <Badge variant={"secondary"} >
                                <Database />
                            </Badge>
                        </div>
                        <div className="">
                            <span className="text-lg">Database</span>
                            <p className='text-white opacity-50 w-[75%] text-sm'>Every project is a full  Pstgres database, the world's most trusted relational database.</p>
                        </div>
                        <div className='mt-5'>
                            <div className='flex items-center gap-2 text-sm'>
                                <Pin className='text-white opacity-50' />
                                <span>100% portable</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <Pin className='text-white opacity-50' />
                                <span>Built-in Auth with RLS</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <Pin className='text-white opacity-50' />
                                <span>Easy to extend</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <img src="https://framerusercontent.com/images/2QGo7WAFtRWGx50S0mp0R1TSY0.png" alt="" className='object-cover w-[200px] h-[200px]' />
                    </div>
                </Card>
                <div className="grid grid-cols-2 col-span-2 gap-5">
                    <Card className='col-span-1 flex-col    flex border-slate-700 justify-center items-center'>
                        <div className="text-center flex flex-col justify-center items-center gap-3 pt-10 px-10">
                            <Badge variant={"secondary"} >
                                <Lock />
                            </Badge>
                            <span className='text-lg'>Authentication</span>
                            <p className='text-sm text-white opacity-50 w-[75%]'>Add user sign ups and logins, securing your data with Row Level Security.</p>
                        </div>
                        <div className='flex justify-center w-full items-center m-5'>
                            <img src="https://pngpix.com/images/hd/abstract-geometric-complexity-kdmc0bebazzibefg.jpg" alt="" className='w-[150px]' />
                        </div>
                    </Card>
                    <Card className='col-span-1 flex-col    flex border-slate-700  items-center relative'>
                        <div className="text-center flex flex-col justify-center items-center gap-3 pt-10 px-10">
                            <Badge variant={"secondary"} >
                                <FunctionSquare />
                            </Badge>
                            <span className='text-lg'>Edge Function</span>
                            <p className='text-sm text-white opacity-50 w-[75%]'>Easily write custom code without deploying or scaling servers.</p>
                        </div>
                        <div className='flex  w-full items-center m-5 absolute bottom-0'>
                            <img src="https://static.wixstatic.com/media/4a2cf0_1dc96638cf60488aaabb928c8a2751ca~mv2.png/v1/crop/x_0,y_158,w_1200,h_1032/fill/w_1116,h_960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/%E2%80%94Pngtree%E2%80%94abstract%20wave%20dot%20blue%20_5505168.png" alt="" className='' />
                        </div>
                        <div className='flex  w-full items-center m-5 '></div>
                    </Card>
                </div>

            </div>


            <div className='grid grid-cols-4  container gap-5'>
                <div className="grid grid-cols-2 col-span-2 gap-5">
                    <Card className='col-span-1 flex-col    flex border-slate-700 justify-center items-center'>
                        <div className="text-center flex flex-col justify-center items-center gap-3 pt-10 px-10">
                            <Badge variant={"secondary"} >
                                <Lock />
                            </Badge>
                            <span className='text-lg'>Authentication</span>
                            <p className='text-sm text-white opacity-50 w-[75%]'>Add user sign ups and logins, securing your data with Row Level Security.</p>
                        </div>
                        <div className='flex justify-center w-full items-center m-5'>
                            <img src="https://pngpix.com/images/hd/abstract-geometric-complexity-kdmc0bebazzibefg.jpg" alt="" className='w-[150px]' />
                        </div>
                    </Card>
                    <Card className='col-span-1 flex-col    flex border-slate-700  items-center relative'>
                        <div className="text-center flex flex-col justify-center items-center gap-3 pt-10 px-10">
                            <Badge variant={"secondary"} >
                                <FunctionSquare />
                            </Badge>
                            <span className='text-lg'>Edge Function</span>
                            <p className='text-sm text-white opacity-50 w-[75%]'>Easily write custom code without deploying or scaling servers.</p>
                        </div>
                        <div className='flex  w-full items-center m-5 absolute bottom-0'>
                            <img src="https://static.wixstatic.com/media/4a2cf0_1dc96638cf60488aaabb928c8a2751ca~mv2.png/v1/crop/x_0,y_158,w_1200,h_1032/fill/w_1116,h_960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/%E2%80%94Pngtree%E2%80%94abstract%20wave%20dot%20blue%20_5505168.png" alt="" className='' />
                        </div>
                        <div className='flex  w-full items-center m-5 '></div>
                    </Card>
                </div>
                <Card className="col-span-2 p-10 justify-between flex border-slate-700">
                    <div className="flex flex-1 flex-col justify-between">
                        <div>

                            <Badge variant={"secondary"} >
                                <Database />
                            </Badge>
                        </div>
                        <div className="">
                            <span className="text-lg">Database</span>
                            <p className='text-white opacity-50 w-[75%] text-sm'>Every project is a full  Pstgres database, the world's most trusted relational database.</p>
                        </div>
                        <div className='mt-5'>
                            <div className='flex items-center gap-2 text-sm'>
                                <Pin className='text-white opacity-50' />
                                <span>100% portable</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <Pin className='text-white opacity-50' />
                                <span>Built-in Auth with RLS</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <Pin className='text-white opacity-50' />
                                <span>Easy to extend</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <img src="https://framerusercontent.com/images/2QGo7WAFtRWGx50S0mp0R1TSY0.png" alt="" className='object-cover w-[200px] h-[200px]' />
                    </div>
                </Card>


            </div>
        </div>
    );
};

export default Grid;
