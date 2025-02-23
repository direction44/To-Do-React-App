import React, { useState } from 'react'

function CreateTask(props) {
    const {addItems}=props
    const[task,setTask]=useState("")
    function handleSubmit(e){
      e.preventDefault()
      addItems(task)
      setTask("")
    }
    function handleChange(e){
        setTask(e.target.value)
    }
  return (
      <form action="" onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange}/>
      <button>Add Task</button>
      </form>
  )
}

export default CreateTask
