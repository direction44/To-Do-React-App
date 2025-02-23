import React from 'react'
import TaskItems from './TaskItems'
function TaskList(props) {
  const {allList,deleteItem}=props
  return (
    <div>
      <table>
        <thead>
          <tr>
           <th>Tasks</th> 
           <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        allList.map((item,index)=>{
          return <TaskItems itemIs={item} key={index} deleteItem={deleteItem}/>
        })
        } 
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
