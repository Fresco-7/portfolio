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
                    </TabsList>
                    <TabsContent value="frontend" className='w-full  flex justify-center' >
                        <BigCard items={frontendItems} />
                    </TabsContent>
                    <TabsContent value="backend" className='w-full  flex justify-center' >
                        <BigCard items={backendItems} />
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
        title: 'Git',
        description: 'basic'
    },
    {
        title: 'React',
        description: 'intermidiate'
    },

]

const backendItems: BigCardItems[] = [
    {
        title: 'PHP',
        description: 'basic'
    },
    {
        title: 'Python',
        description: 'Itermidiate'
    },
    {
        title: 'TypeScript',
        description: 'Itermidiate'
    },
    {
        title: 'C',
        description: 'Basic'
    },
    {
        title: 'NodeJs',
        description: 'Basic'
    },
    {
        title: 'MySql',
        description: 'Intermidiate'
    },
    {
        title: 'Java',
        description: 'Intermidiate'
    }
]
