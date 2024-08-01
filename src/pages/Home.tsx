import Community from '@/components/Community'
import Footer from '@/components/Footer'
import Framework from '@/components/Framework'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import InstantApiSection from '@/components/InstantApiSection'
import LastSection from '@/components/LastSection'
import Navabar from '@/components/Navabar'
import Templates from '@/components/Templates'
import { Button } from '@/components/ui/button'
import React from 'react'




const Home = () => {

  return (
    <div className=''>
      <Navabar/>
      <Hero/>
      <Grid/>
      <Framework/>
      <Community/>
      <Templates/>
      <InstantApiSection/>
      <hr className='border-muted'/>
      <LastSection/>
      <hr className='border-muted'/>

      <Footer/>
    </div>
  )
}

export default Home
