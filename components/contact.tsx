import React from 'react'
import { MediumCard, MediumCardItems } from './cards/mediumCard'
import { Mail, PhoneCall } from 'lucide-react'

export const Contact = () => {
  return (
    <div className='flex flex-col w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl'>Contact Me</h1>
            </div>
            <div className='flex justify-center mt-12'>
            <MediumCard items={items} />
            </div>
        </div>
  )
}

const items : MediumCardItems[] = [
    {
        title: 'Email',
        description: 'afonso.fresco@gmail.com',
        icon : Mail
    },
    {
        title: 'Phone',
        description: '+351 924058528',
        icon : PhoneCall
    },


]