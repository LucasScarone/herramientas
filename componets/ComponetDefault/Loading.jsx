import React from 'react'
import { Layoud } from './Layoud'
import Header from './Header'

export const Loading = () => {
  return (
    <>
    <Layoud>
        <Header></Header>
        <div className='flex grow justify-center '>

        <h1 className=' text-center text-black text-2xl'>Loading</h1>
        </div>
    </Layoud>
    </>
    )
}
