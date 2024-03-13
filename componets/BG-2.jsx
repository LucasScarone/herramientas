import React from 'react'
import { Main } from './Main'
import Footer from './ComponetDefault/Footer'

export const BGM = () => {
  return (
    <div id="content-bg-2" className="flex flex-col grow justify-center bg-cover bg-no-repeat ">
        <Main></Main>
        <Footer></Footer>
    </div>
    )
}
