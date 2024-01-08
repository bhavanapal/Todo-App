import React from 'react'
import './Todo.css';

function TodoMainList(props) {
  return (
     <li  className = 'create-list'>
       {props.list}
       <button className='btn btn-danger btn-sm m-2' onClick={e=>{props.handleRemove(props.index)}}>Remove</button>
     </li>
  )
}

export default TodoMainList;