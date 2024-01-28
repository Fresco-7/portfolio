import { Verified } from 'lucide-react'
import React from 'react'

export interface BigCardItems{
  title : string,
  description : string,
}

export const BigCard = ({items} : {items : BigCardItems[]}) => {
  return (
    <div className='flex justify-between bg-card lg:w-2/5 rounded-2xl h-68 py-5 px-5 border'>
      <div className='grid grid-cols-2 justify-center gap-7'>
        {items.map((item) => (
          <BigCardItem key={item.title} title={item.title} description={item.description}/>
        ))}
        
      </div>
    </div>
  )
}


const BigCardItem = ({title, description} : {title: string, description : string}) => {
  return (
    <div className='p-1 flex flex-col gap-2'>
      <div className='flex gap-1'>
        <Verified className='hidden xl:flex'/>
        <span className='text-xl'>{title}</span>
      </div>
      <span className='text-muted-foreground text-xs'>{description}</span>
    </div>
  )
}