import { LucideIcon, Verified } from 'lucide-react'
import React from 'react'

export interface MediumCardItems {
  title: string,
  description: string,
  icon: LucideIcon,
}

export const MediumCard = ({ items }: { items: MediumCardItems[] }) => {
  return (
    <div className='flex flex-col md:flex-row gap-5  w-54'>
      {
        items.map((item) => (
          <div key={item.title} className='flex bg-card w-full p-5 rounded-2xl border'>
            <div className='p-1 flex flex-col gap-2'>
              <div className='flex gap-1 items-center '>
                <item.icon size={24} />
                <span className='text-xl'>{item.title}</span>
              </div>
              <span className='text-muted-foreground text-xs'>{item.description}</span>
            </div>
          </div>
        ))
      }
    </div>
  )

}