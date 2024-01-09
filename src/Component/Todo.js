import React,{useState} from 'react'
import Addtodo from './Addtodo'
import Distodo from './Distodo'

export const Todo = () => {
    const [alltodo, setalltodo] = useState([])
    const addtodo = (input) =>{
       console.log(input);
       setalltodo([...alltodo, input])
    }
  return (
    <div>
        <Addtodo addtodo={addtodo}/>
        <Distodo alltodo={alltodo}/>
    </div>
  )
}

export default Todo
