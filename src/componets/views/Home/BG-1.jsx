import React from 'react'
import Hero from './Hero'
import Header from '../ComponetDefault/Header'

export const BGH = () => {
  return (
    <div id="content-bg-1" className=" w-full min-h-screen flex flex-col bg-cover bg-no-repeat ">
        <Header></Header>
        <Hero></Hero>
    </div>    
    )
}
