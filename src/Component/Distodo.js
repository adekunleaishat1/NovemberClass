import { h1 } from 'fontawesome';
import React from 'react'

const Distodo = ({alltodo}) => {
    console.log(alltodo);
    const todo = alltodo 
  return (
    <div>
        {
            todo.map(e=>(
                <h1>{e}</h1>
            ))
        }
    </div>
  )
}

export default Distodo