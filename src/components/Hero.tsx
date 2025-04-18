import Image from 'next/image'
import React from 'react'

const Hero = (img: {img: string}) => {
  return (
    <div className='relative h-[300px] w-full'>
        <Image src={img.img} alt="hero" fill className='object-cover' />
    </div>
  )
}

export default Hero