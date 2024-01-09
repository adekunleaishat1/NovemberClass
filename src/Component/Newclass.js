

import React, {useState, useEffect} from 'react'

const Newclass = () => {
      const [myname, setmyname] = useState("kunle")
      const [username, setusername] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
      const [alluser, setalluser] = useState([] && JSON.parse(localStorage.getItem("List")))
      const [count, setcount] = useState(0)
      const [calculation, setcalculation] = useState(0)
      const [user, setuser] = useState({})
      const [index, setindex] = useState(null)
     
    const list = JSON.parse(localStorage.getItem("List"))

    // console.log(list);

  useEffect(()=>{
    localStorage.setItem("List", JSON.stringify(alluser))

  },[alluser])

  useEffect(()=>{
    setcalculation(count * 2)
  },[count])

  const add = () =>{
    setcount(count + 1)
  }

    

    // let myname = "kunle"
    let gender = "male"
    let array = [
        {firstName: "sola", lastName:"Hammed"},
        {firstName: "tola", lastName:"Hammed"},
        {firstName: "fola", lastName:"Hammed"},
        {firstName: "kemi", lastName:"Hammed"},
        {firstName: "bolu", lastName:"Hammed"},
    ]
    const changevalue = (e) =>{
        setmyname("sola") 
        console.log(myname);
        // console.log(firstinput);
        // console.log(first);
    }
    const save = () =>{
        let user = {
            username,
            email,
            password
        }
        setalluser([...alluser, user])
        console.log(alluser);
        
    }
    const edititem = (i, el) =>{
      setindex(i)
    console.log(alluser[i]);
      setuser({...alluser[i]})
       console.log(user);
    }
    const savechange = () =>{
        console.log(index);
       let prevuser = alluser[index] 
       console.log(prevuser);
       setalluser.find(el=> el.index === index)
       console.log(alluser);
 
    }
      const handlechange = (e) =>{
        setuser({...user, username:e.target.value })
        console.log(user);
      }
      const handleemail = (e) =>{
        setuser({...user, email:e.target.value })
        console.log(user);
      }
      const handlepassword = (e) =>{
        setuser({...user, password:e.target.value })
        console.log(user);
      }
   
  return (
    <div>

        
         <h1>{count}</h1>
         <h1>{calculation}</h1>
         <button onClick={add}>add to count</button>

           <div className='form-group w-50'>

           <input onChange={(e)=>{
            setusername(e.target.value)
            console.log(username);
           }} className='form-control' type="text" placeholder='username'/>
            <input onChange={(e)=>setemail(e.target.value)} className='form-control' type="text" placeholder='email' />
            <input onChange={(e)=>setpassword(e.target.value)} className='form-control' type="text" placeholder='password' />

            <button onClick={save}>Save</button>
           </div>


    



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <input value={user.username}  onChange={(e)=>handlechange(e)} className='form-control' type="text" placeholder='username'/>
            <input  value={user.email}  onChange={(e)=>handleemail(e)} className='form-control' type="text" placeholder='email' />
            <input  value={user.password}  onChange={(e)=>handlepassword(e)} className='form-control' type="text" placeholder='password' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={savechange} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

           {list &&
           list.map((el, i)=>(
                <>
                <div key={i}>
                    <h1>{el.username}</h1>
                    <h1>{el.password}</h1>
                    <h1>{el.email}</h1>
                    <div>
                        <button >&times</button>
                        <button onClick={()=>edititem(i,el)} data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
                    </div>
                </div>
                </>
           ))

           }

    
       

    </div>
  )
}

export default Newclass