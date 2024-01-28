"use client"


import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { NavItem } from "@/components/navbar/navItem";
import { Porfolio } from "@/components/portolio";
import { Skills } from "@/components/skills";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <div className="py-24 flex-1 justify-center h-screen" id='home'>
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <Avatar className='w-72 h-72 lg:hidden'>
          <AvatarImage src="/image1.jpeg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Hero />
      </div>
      <div className="mt-24" id='skills'>
        <Skills />
      </div>
      <div className="mt-24" id='porfolio'>
        <Porfolio />
      </div>
      <div className="mt-24 mb-10" id='contact'>
        <Contact />
      </div>
    </div>
  );
}


