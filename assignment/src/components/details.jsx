import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import "./Todo.css"
export const Detalis=()=>{
 const {id}=useParams()
 const [list,setList]=useState({})
 useEffect(()=>{
    getData()
 },[])

 const changeToDo=(id,status,item)=>{
     console.log(id,status,item)
    axios.put(`http://localhost:5004/item/${id}`,{tital:item,status:status==="Done"?"Pending":"Done"}).then(getData)
  }

  const deleteToDO=(id)=>{
    axios.delete(`http://localhost:5004/item/${id}`).then(getData)
      
  }
 
const getData=()=>{
    axios.get(`http://localhost:5004/item/${id}`).then(({data})=>{
        setList(data);
    }).catch((e)=>{console.log("Data is Deleted")})
}
    return(<>
    <h1>Detalis</h1>
    <h2 className="output">{list.tital}</h2>
    <button className="more" onClick={()=>changeToDo(list.id,list.status,list.tital)}>{list.status}</button>
    <a href="/"><button className="more" onClick={()=>deleteToDO(list.id)}>Delete</button></a>
    <hr />
   <a href="/"><button className="more">Go To Home</button> </a> 
    </>)
}