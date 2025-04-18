import React from 'react'
import Hero from '@/components/Hero'
import Gallery from '@/components/sections/Gallery'

const GalleryPage = () => {
  return (
    <div className='mt-16'>
        <Hero img={"/images/hero/hero13.jpg"} />
        <Gallery />
    </div>
  )
}

export default GalleryPage 