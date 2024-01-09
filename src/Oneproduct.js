import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Oneproduct = () => {
    const {id} = useParams()
    console.log(id);
    const [data, setdata] = useState({})
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data)
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
     
    }, [])

    
    
    
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <h1>{data.brand}</h1>
        <img src={data.thumbnail} alt="" />
        {data.images &&
          data.images.map((el)=>(
            <> 
            <img src={el} alt="" />
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Oneproduct