import Navbar from "./Component/Navbar";
import mystyle from './Style/Style'
import './Component/Navbar.css'
import Home from "./Home";
import './App.css'
import Newclass from "./Component/Newclass";
import Discard from "./Component/Discard";
import { Todo } from "./Component/Todo";
import { Route, Routes } from "react-router-dom";
import Notfound from "./Notfound";
import Http from "./Http";
import Oneproduct from "./Oneproduct";
import Form from "./Form";

const App =() =>{
  return(
    <>
    <Routes>
      <Route path="/*" element={<Notfound/>}/>
      <Route path="/home" element={<Home/>}>
        <Route path="/home/new" element={<Newclass/>}/>
        <Route path="/home/todo" element={<Todo/>}/>
      </Route>
      <Route path="/http" element={<Http/>}/>
      <Route path="/one/:id" element={<Oneproduct/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
     
     
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