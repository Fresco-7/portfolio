import { LucideIcon } from 'lucide-react'
import React from 'react'

export const SmallCard = ({ title, icon : Icon, description }: { title: string, icon: LucideIcon, description: string }) => {
    return (
        <div className='flex flex-col gap-1 bg-card rounded-2xl h-32 py-5 px-2 border'>
            <div className='flex justify-center'>
                <span>
                    <Icon/>
                </span>
            </div>
            <div className='flex justify-center'>
                <span>
                    {title}
                </span>
            </div>
            <div className='flex justify-center'>
                <span className='text-md text-muted-foreground'>
                    {description}
                </span>
            </div>

        </div>
    )
}