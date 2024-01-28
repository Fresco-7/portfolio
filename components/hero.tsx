import React from 'react'
import { AiFillGithub, AiFillInstagram, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { NavItem } from './navbar/navItem'
import { Button } from './ui/button'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { FaRegFileAlt } from 'react-icons/fa'
import Link from 'next/link'

export const Hero = () => {
  const handleClick = async () => {
    const response = await fetch('/api/cv');  

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cv.pdf';
    link.click();
};

  return (
    <div className='flex w-full items-center gap-20 lg:gap-28 xl:gap-36 '>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-5 w-full lg:w-3/5'>
          <h1 className='text-2xl lg:text-5xl xl:text-6xl text-foreground/90'>João Fresco</h1>
          <span className='text-muted-foreground text-md text-justify pr-14'>{`I'm a junior full stack developer based in Lisbon, and I'm very passionate and dedicated to my work.`}</span>

          <div className='flex flex-col md:flex-row gap-4'>
            <Button className='lg:w-2/4 w-full h-12'>
              <Link href={'#contact'}>
                <div className='flex gap-1.5 items-center'>
                  <IoPaperPlaneOutline size={24} className='hidden md:flex' /> <p>Contact Me</p>
                </div>
              </Link>
            </Button>
            <Button className='lg:w-2/4 w-full h-12' onClick={handleClick}>
              <div className='flex gap-1.5 items-center'>
                <p>Download CV</p> <FaRegFileAlt size={22} className='hidden md:flex' />
              </div>
            </Button>

          </div>
          <div className="flex w-full gap-5 py-2 items-start justify-start">
            <NavItem target='_black' href='https://github.com/Fresco-7'><AiOutlineGithub size={24} /></NavItem>
            <NavItem target='_black' href='https://www.instagram.com/fresco.77'><AiOutlineInstagram size={24} /></NavItem>
            <NavItem target='_black' href='https://www.linkedin.com/in/jo%C3%A3o-afonso-fernandes-de-oliveira-fresco-baa8a4239/' ><AiOutlineLinkedin size={24} /></NavItem>
          </div>
        </div>
        <div className='w-2/5 hidden lg:flex ml-2'>
          <Avatar className='w-72 h-72'>
            <AvatarImage src="/image1.jpeg" alt="@shadcn" />
            <AvatarFallback>João Fresco</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div >

  )
}
