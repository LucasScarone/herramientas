import React from 'react'

export const BGH = (props) => {
  return (
    <div id="content-bg-1" className=" w-full min-h-screen flex flex-col bg-cover bg-no-repeat ">
        { props.children}
    </div>    
    )
}
