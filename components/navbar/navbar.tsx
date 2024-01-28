import React from 'react';
import { NavItem } from './navItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export const Navbar = () => {
    return (
        <div className=' fixed top-0 inset-x-0 h-16' style={{zIndex : 999}}>
            <div className='xl:px-64 md:px-56 px-5 bg-white border-b flex items-center justify-between fixed top-0 inset-x-0 h-16' style={{zIndex : 999}} >
                <div>
                    <span className='text-foreground text-xs lg:text-sm'>fresco.</span>
                </div>
                <div className='flex gap-4'>
                    <NavItem target='' href='#home'>Home</NavItem>
                    <NavItem target='' href='#skills'>Skills</NavItem>
                    <NavItem target='' href='#porfolio'>Porfolio</NavItem>
                    <NavItem target='' href='#contact'>Contact</NavItem>
                </div>
            </div>
        </div>
    );
};
