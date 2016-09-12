import React from 'react';
import autoBind from 'react-autobind';

const ListItem = React.createClass ({
  //initiate List Items
  getInitialState() {
    return {

    }
  },

  //handle click on edit
  _handleEdit() {
    this.props.onEditEmployee(this.props.details)
  },

  //handle click on delete
  _handleDelete() {
    this.props.onDeleteEmployee(this.props.details)
  },

  //render listItems
  render() {
    const employeeDetails = this.props.details
    const employeeRow = Object.keys(this.props.details).map(function(key, idx) {
      return (
        <td key={idx + 1}>
          {employeeDetails[key]}
        </td>
      )
    })

    return (
      <tr className = {this.props.editClass} >
        {employeeRow}
        <td><button onClick = {this._handleEdit}>Edit</button></td>
        <td><button onClick = {this._handleDelete}>delete</button></td>
      </tr>
    )
  }
})

export default ListItem