import React from 'react'
import Hero from '@/components/Hero'
import Introduction from '@/components/sections/Introduction'


const IntroductionPage = () => {
  return (
    <div className='mt-16'>
        <Hero img={"/images/hero/hero10.jpg"} />
        <Introduction />
    </div>
  )
}

export default IntroductionPage