import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container-fluid row cont'>
        <div className='col-4'>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
        <div className='col-4'>
          <img src={require("./logo512.png")} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home