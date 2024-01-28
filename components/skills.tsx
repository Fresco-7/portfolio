'use client'
import React from 'react'
import { BigCard, BigCardItems } from './cards/bigCard';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export const Skills = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl'>Skills</h1>
            </div>
            <div className='flex w-full justify-center h-full gap-16 mt-12'>
                <Tabs defaultValue="backend" className='flex flex-col w-full justify-center h-full '>
                    <TabsList className='mb-5'>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="others">Others</TabsTrigger>

                    </TabsList>
                    <TabsContent value="frontend" className='w-full  flex justify-center' >
                        <BigCard items={frontendItems} />
                    </TabsContent>
                    <TabsContent value="backend" className='w-full  flex justify-center' >
                        <BigCard items={backendItems} />
                    </TabsContent>
                    <TabsContent value="others" className='w-full  flex justify-center' >
                        <BigCard items={others} />
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}


const frontendItems: BigCardItems[] = [
    {
        title: 'HTML',
        description: 'itermidiate'
    },
    {
        title: 'CSS',
        description: 'itermidiate'
    },
    {
        title: 'JavaScript',
        description: 'itermidiate'
    },

    {
        title: 'React',
        description: 'intermidiate'
    },

]
const others: BigCardItems[] = [
    {
        title: 'Git',
        description: 'basic'
    },
    {
        title: 'Express',
        description: 'basic'
    },
    {
        title: 'NextJs',
        description: 'advanced'
    },
    {
        title: 'Flask',
        description: 'basic'
    },
]

const backendItems: BigCardItems[] = [
    {
        title: 'PHP',
        description: 'basic'
    },
    {
        title: 'Python',
        description: 'itermidiate'
    },
    {
        title: 'TypeScript',
        description: 'itermidiate'
    },
    {
        title: 'C',
        description: 'basic'
    },
    {
        title: 'NodeJs',
        description: 'basic'
    },
    {
        title: 'MySql',
        description: 'intermidiate'
    },
    {
        title: 'Java',
        description: 'Intermidiate'
    }
]
