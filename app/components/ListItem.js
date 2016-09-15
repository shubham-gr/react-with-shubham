import React from 'react';
import autoBind from 'react-autobind';

const ListItem = (props) => ({
 
  //render listItems
  render() {
    const employeeDetails = props.details
    return (
      <tr className = {props.editClass} >
        <td >
          {employeeDetails.id}
        </td>
        <td >
          {employeeDetails.name}
        </td>
        <td >
          {employeeDetails.age}
        </td>
        <td >
          {employeeDetails.email}
        </td>
        <td >
          {employeeDetails.gender}
        </td>
        <td>
          <button onClick = {props.onEdit}>
            Edit
          </button>
        </td>
        <td>
          <button onClick = {props.onDelete}>
            delete
          </button>
        </td>
      </tr>
    )
  }
})

export default ListItem