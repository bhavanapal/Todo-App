import React,{useState} from 'react'
import './Todo.css';

function Todolists(props) {
    const [todoValue , setTodoValue] = useState("");
  
    const handleEnter=(e)=>{
      if(e.keyCode === 13){
        props.handleAddValue(todoValue)
        setTodoValue("")
      }
    }
  
    return (
    <div className="container"  style={{textAlign:'center'}}>
    <input type="text" value={todoValue} onChange={e =>{setTodoValue(e.target.value)}} onKeyDown={handleEnter} />
         <button className = "btn btn-primary" onClick={()=>{ props.handleAddValue(todoValue)  
          setTodoValue("") }}>Add</button>
    </div>
  )
}



export default Todolists;