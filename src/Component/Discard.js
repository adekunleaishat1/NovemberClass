import React from 'react'
import Card from './Card'
import images from '../logo512.png'
import image2 from '../logo.svg'

const Discard = () => {
    let data =[
        {text:"eeeeeeeeeeeeeeeee", image:image2},
        {text:"eeeeeeeeeeeeeeeee", image:images},
    ]
  return (
    <div>
        {
            data.map((el, index)=>(
               <div key={index} className='w-25 mt-3 bg-light' >
                   <Card image={el.image} text={el.text}/> 
               </div>
            ))
        }
    </div>
  )
}

export default Discard