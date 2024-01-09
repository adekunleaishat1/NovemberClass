import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [info, setinfo] = useState([])
    const [product, setproduct] = useState([])

    useEffect(() => {
      axios.get("http://localhost:1234/post")
      .then((res)=>{
        console.log(res.data);
            setinfo(res.data)
            console.log(info);
      }).catch((err)=>{
        console.log(err);
      })
    }, [])
    useEffect(() => {
      axios.get("http://localhost:1234/product")
      .then((res)=>{
        console.log(res.data);
            setproduct(res.data)
            console.log(info);
      }).catch((err)=>{
        console.log(err);
      })
    }, [])

    const display = (category) => {
      let counter = 0
      return product.map((el, i)=>{
        if (el.category == category) {
          if (counter < 1) {
            counter++
            return (
              <div key={i}>
                <h1>{el.name}</h1>
              </div>
            )
          }
         
        }
      })
        
      
    }

    const formik = useFormik({
       initialValues:{
        email:"",
        password: "",
        username:"",
       },
      validationSchema:yup.object({
        email:yup.string().email("email must be a valid email").required("email must not be empty"),
        password:yup.number().min(8,"password must not be lessthan 8").required("password must not be empty "),
        username:yup.string().min(6, "username is too short").required("username must not be empty")
      }),
      onSubmit: (value) =>{
        console.log(info);
        console.log(value);
        let curuser = info.find(e=> e.email === value.email)
        console.log(curuser);
        if (curuser) {
            
            toast.error("user already exist")
        }else{
             axios.post("http://localhost:1234/post",value)
        .then((res)=>{
            console.log(res);
            toast.success("post successful")
        }).catch((err)=>{
            console.log(err);
            toast.error("error occured")
        })
        }
      
      }
    })
    // console.log(formik.errors);
    // console.log(formik.touched);


    // const savedata = () =>{
    //     console.log(name, email, password );
    //     axios.post("http://localhost:1234/post",{name, email, password})
    //     .then((res)=>{
    //         console.log(res.data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
  return (
    <div className='mx-auto w-100'>
            <form onSubmit={formik.handleSubmit} className='form-group w-50'>

                <input name='username' onBlur={formik.handleBlur} className='form-control mt-3' onChange={formik.handleChange} type="text"  />
                <small className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</small>

                <input name='email' onBlur={formik.handleBlur} className='form-control mt-3' onChange={formik.handleChange} type="text" />
                <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>

                <input name='password' onBlur={formik.handleBlur} className='form-control mt-3' onChange={formik.handleChange} type="text" />
                <small className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</small>

                <button className='btn btn-primary mt-3'>save</button>
                <ToastContainer/>
            </form>

            <div>
              {display("phone")}
            </div>
            <div>
              {display("jewelry")}
            </div>
            <div>
              {display("food")}
            </div>
            {/* {
      product.map((el)=>(
        <div>
           <h1>{el.name}</h1>
        </div>
      ))
    } */}
    </div>
  
  
  )
}

export default Form