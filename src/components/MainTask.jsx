import React, { useState } from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList';
function MainTask() {
   const[allTaskItem,setAllTaskItem]=useState([])
   function addItem(item){
    if(item.trim()==="")
    {
      alert("Task Can Not Be Empty")
    }
    const newItem={Item:item.trim(),isCompleted:false}
    setAllTaskItem([...allTaskItem, newItem]);
   }
   function deleteItem(itemName) {
    console.log(itemName);
    
    const updatedItem = allTaskItem.filter((task) => task.Item.trim() !== itemName.trim());
  
    console.log(updatedItem, "updatedItem");
    
    setAllTaskItem(updatedItem);
  }
  

  return (
    <div>
      <h1>Hellooo</h1>
      <div>
         <CreateTask addItems={addItem}/>
      </div>
      <div>
         <TaskList allList={allTaskItem} deleteItem={deleteItem}/>
      </div>
    </div>
  )
}

export default MainTask
