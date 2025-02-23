import React from 'react'

function TaskItems(props) {
  const {itemIs,deleteItem}=props
  console.log(itemIs,"itemIs")

  function handleDelete()
  {
    deleteItem(itemIs.Item)
  }
  return (
    <tr>
      <td>    
          <span>{itemIs.Item}</span>
      </td>
      <td>
      <button>edit</button>
      <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  )
}

export default TaskItems
