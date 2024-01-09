import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Http = () => {
    const [datas, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     setdata(data)
        //     console.log(datas);
        // })
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
            setloading(true)
            // console.log(response);
            setdata(response.data.products)
            console.log(datas);
        }).catch((err)=>{
            console.log(err);
        })
      
    }, [])
    const seemore = (el) =>{
      let id = el.id
      navigate(`/one/${id}`)
    }
   
  return (
    <div>
        {loading == true ? 
            datas.map((el, i) =>(
            
                   <div key={i} className='card w-25'>
                       <h1>{el.id}</h1>
                       <h1>{el.title}</h1>
                       <img src={el.thumbnail} alt="" />
                       <button onClick={()=>seemore(el)}>see more</button>
                   </div>
            
            )) : <h1>loading...</h1>
        }

    </div>
  )
}

export default Http