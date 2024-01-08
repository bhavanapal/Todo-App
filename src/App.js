import React,{useState} from 'react'
import Todolists from './Components/Todolists'
import  TodoMainList from './Components/TodoMainList'
 import './Components/Todo.css'


function App() {
const[addValue, setAddValue] = useState([]);
  const handleAddValue =(todoValue)=>{
    if(todoValue !== "")
    setAddValue([...addValue,todoValue])
  }

  const handleRemoveValue=(key)=>{
    let newListItem = [...addValue];
    newListItem.splice(key,1);
    setAddValue([...newListItem])
  }
  return (
 <div className = "main-container text-white">
   <h1 style={{textAlign:'center'}}>TODO LIST</h1>
    <hr/>
   <Todolists  handleAddValue = {handleAddValue} />
   {addValue.map((listitem,id)=>(
     < TodoMainList list= {listitem} key={id}  index={id} handleRemove={handleRemoveValue} />
   ) 
  )}
  </div> 
  );
}

export default App;
