import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
const gallery = [
  [1,2,3,1,2,3],
  [4,5,6,4,5,6],
  [7,8,9,7,8,9],
]
export const NFTSlider = () => {
  return (
    <div 
      className={clsx(
        'relative hidden lg:flex gap-6 overflow-hidden shrink-0 h-[792px]',
        'after:block after:absolute after:w-full after:h-[175px] after:bg-gradient-to-b after:from-white after:to-transparent after:top-0 after:left-0',
        'before:z-10 before:block before:absolute before:w-full before:h-[175px] before:bg-gradient-to-t before:from-white before:to-transparent before:bottom-0 before:left-0',
      )}>
      {gallery.map((column, i) => {
        return (
          <div key={i} className='relative flex gap-6 flex-col bottom-4 shrink-0 first:-top-8 -top-28 last:-top-2 animate-slide'>
            {column.map((img, i) => (
              <div key={i} className='relative shrink-0 w-[216px] h-[310px] rounded-[48px] overflow-hidden'>
                <Image 
                  src={`/images/home/hero-slider/img-${img}.png`} 
                  alt='gallery image' 
                  fill 
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
