import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const goback = () =>{
         navigate("/")
    }
  return (
    <div>
        <h1 className='text-danger'>Page not found</h1>
        <button onClick={goback} className='btn btn-success'>Go back Home</button>
    </div>
  )
}

export default Notfound