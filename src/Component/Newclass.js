import React, {useState} from 'react'

const Newclass = () => {
      const [myname, setmyname] = useState("kunle")
      const [firstinput, setfirstinput] = useState("")
      const [first, setfirst] = useState("")
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
        console.log(firstinput);
        console.log(first);
    }
   
  return (
    <div>
        <input onChange={(e)=> setfirstinput(e.target.value)} type="text" />
        <input onChange={(e)=> setfirst(e.target.value)} type="text" />
        <h1>{myname}</h1>
        <button onClick={changevalue}>change</button>
        <h1 className={gender == "male"? "text-secondary tex" : "text-danger"}>{gender == "male"? "kunle" : "sola"}</h1>
        <table className='table'>
                <tr>
                    <td>firstName</td>
                    <td>lastName</td>
                </tr>
                {
                    array.map((el, i) =>(
                        <>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                        </tr>
                        </>
                    ))
                }
        </table>
       

    </div>
  )
}

export default Newclass