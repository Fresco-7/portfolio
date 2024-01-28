import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

export const Porfolio = () => {
    return (
        <div className='flex flex-col jus w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl'>Porfolio</h1>
                <span className='text-muted-foreground text-md text-justify'>Projects</span>
            </div>
            <div className='flex justify-center mt-12'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {images.map((item) => (
                            <CarouselItem key={item.image} className="md:basis-1/2 lg:basis-1/2">
                                <div className="flex flex-col p-1 gap-4">
                                    <Image className='rounded-2xl' src={item.image} alt='ProjetoFCT' height='600' width='900' />
                                    <div className='text-justify px-5'>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

const images = [
    {
        image: "/pos.png",
        description: 'My ongoing project revolves around the development of a cutting-edge Restaurant Order Management System, leveraging the power of Next.js and MySQL to streamline and elevate the operational efficiency of restaurants.'
    },
    {
        image: "/projetoFct.png",
        description: 'This project focuses on the development of a comprehensive Internship Management System, employing Flask and MySQL to automate and streamline the paperwork associated with internship programs.'
    },
    {
        image: "/CrudApp.png",
        description: 'CRUD application, written in NextJs, '
    },
]