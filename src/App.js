import Navbar from "./Component/Navbar";
import mystyle from './Style/Style'
import './Component/Navbar.css'
import Home from "./Home";
import './App.css'
import Newclass from "./Component/Newclass";

const App =() =>{
  return(
    <>
      <Navbar/>
      <Newclass/>
      {/* <Home/> */}

      {/* <Navbar/>
      <h1 style={{color:"red"}}>new class {Math.random()}</h1>
      <h1 style={mystyle.header}>new class {Math.random()}</h1>
      <h1 style={mystyle.top}>new class {Math.random()}</h1>
      <h1 className="h1">App</h1>
      <button className="btn btn-primary">save</button>
      <i className="fa fa-user"></i>
      <img src={require("./logo512.png")} alt="" />
      <img src={require("./logo512.png")} alt="" /> */}
    </>
    
  )
}
  
export default App;