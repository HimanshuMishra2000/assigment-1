import {useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/action"
import "./Todo.css"
import { Link } from "react-router-dom"
export const Todo=()=>{
    const [text,settext]=useState("")
    const dipatch=useDispatch()
    const display=useSelector((stroe)=>stroe.todo)

    const hendleChange=()=>{
        
       axios.post("http://localhost:5004/item",{tital:text,status:"Pending"}).then(getdata)
       settext("")
    }
   
    useEffect(()=>{
       getdata()
   },[])
    
   const getdata=()=>{
       axios.get("http://localhost:5004/item").then(({data})=>{
        dipatch(addTodo(data))
       })
   }
    return(
        <div>
            <input className="Todoinput" type="text" value={text} onChange={(e)=>settext(e.target.value)} />
            <button className="AddToDo" onClick={()=>hendleChange()}>Add Todo</button>
            {/* <ShowToDo key={e.id} id={e.id} item={e.tital} status={e.status} change={changeToDo} delet={deleteToDO}/> */}
            <div className="outer">
            {display.map((e,i)=><div className="iner" key={e.id}>
                <label className="output" htmlFor="">{e.tital}</label>
                <Link className="more" to={`/item/${e.id}`}>More</Link>
            </div>)}
            </div>
          
        </div>
    )
}