import React from 'react'
import Hero from '@/components/Hero'
import Documents from '@/components/sections/Documents'

const DocumentsPage = () => {
  return (
    <div className='mt-16'>
        <Hero img={"/images/hero/hero11.jpg"} />
        <Documents />
    </div>
  )
}

export default DocumentsPage 