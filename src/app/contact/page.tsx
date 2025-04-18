import React from 'react'
import Hero from '@/components/Hero'
import Contact from '@/components/sections/Contact'

const ContactPage = () => {
  return (
    <div className='mt-16'>
        <Hero img={"/images/hero/contact.jpg"} />
        <Contact />
    </div>
  )
}

export default ContactPage 