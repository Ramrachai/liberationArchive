import React from 'react'
import Hero from '@/components/Hero'
import Interviews from '@/components/sections/Interviews'

const InterviewsPage = () => {
  return (
    <div className='mt-16'>
        <Hero img={"/images/hero/hero12.jpg"} />
        <Interviews />
    </div>
  )
}

export default InterviewsPage 