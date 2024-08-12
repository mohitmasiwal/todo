 import React, { useState } from 'react'
  import Listd from './Listd';
 
 const TodoList = () => {
  const [Data,setData]=useState("");
 const[ item,setItem]=useState([]);
    const HandleChange = (e)=>{
      console.log("jjjj")
      setData(e.target.value)
    }
    
    const HClick = () =>{
      console.log("suusus")
setItem((old)=>{
     return[...old,Data];
})

setData("")
    }
    const DeleteItem = (id) =>{
      console.log("dekiii")
      setItem((old)=>{
        return old.filter((arrayEle,index)=>{
          return index !==id
        })
   })
    }
   return (
     <div className="container border border-3" style={{height:"400px", borderRadius:"40px", boxShadow:"5px 5px 5px", width:"30%",margin:"auto", overflow:"auto" ,color:"blue" }}>
      
       <h1>TODO</h1>
       <div className="set">
        <h6>Personal</h6>
        <h6>Professional</h6>
        </div>
        <div className="Box">
          <input  className="inputBoxx" onChange={HandleChange} placeholder="Personal Todo"type="text" name="" id="" value={Data} />
          <button  onClick={HClick}type="button" class="btn btn-primary one">Add</button>
        </div>
        <div className="Lists">
        <ol style={{color:"black"}}>
        {  item.map((element,index)=>{
          return <Listd key={index} onSelect={DeleteItem} id={index} text={element}/>
          })}
          </ol>
        </div>
        <div className="last">
          Click on todos to delete
        </div>
       
     </div>
   )
 }
 
 export default TodoList
 