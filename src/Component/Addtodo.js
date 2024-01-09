import React,{useState} from 'react'

const Addtodo = ({addtodo}) => {
    const [input, setinput] = useState("")

  return (
    <div>
        <input onChange={(e)=>setinput(e.target.value)} type="text" placeholder='Enter todo' />
        <button onClick={()=>addtodo(input)}>Addtodo</button>
    </div>
  )
}

export default Addtodo