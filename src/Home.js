import React from 'react'
import Button from './Component/Button'
import  Image  from './Component/Image'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  const save = () =>{
    alert("working")
  }
  const signup = () =>{
    alert("register working")
  }
  return (
    <div>
      <Navbar/>
          <Outlet/>
      {/* <div className='container-fluid row cont'>
        <div className='col-4'>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
        <div className='col-4'>
          <img src={require("./logo512.png")} alt="" />
        </div>
      </div>
      <Button click={save} color="but" name="click"/>
      <Button click={signup} color="btn btn-primary" name="signup"/>
      <Button color="btn btn-success" name="login"/>
      <div className='img'>
      <Image display={require("./logo512.png")}/>
      <Image display={require("./logo.svg")}/>
      <Image display={require("./logo512.png")}/>    
      </div>
      */}
    </div>
  )
}

export default Home