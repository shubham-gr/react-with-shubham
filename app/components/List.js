import React from 'react';
import autoBind from 'react-autobind';
import ListItem from './ListItem';

const List = React.createClass ({
	//initiate List
	getInitialState() {
		return {

		}
	},

	// render List Component
	renderData() {
		let listItems = this.props.employees.map( (employee) => {
			return (<ListItem key={employee.id} onEditEmployee = {this.props.onEditEmployee} onDeleteEmployee = {this.props.onDeleteEmployee} editClass ={employee.id === this.props.activeId ? 'highlight-row' : null}  details = {employee} />)
		})
		return(listItems)
	},

	render() {
		return (
			<div>
				<div>
					<h1>Employees<small>@techRacers</small></h1>
				</div>
				<table id="list">
					<thead>
						<tr>
	            <th>#</th>
	            <th>Name</th>
	            <th>Age</th>
	            <th>Email</th>
	            <th>Gender</th>
	            <th>Edit</th>
	            <th>Delete</th>
	          </tr>
	        </thead>
	        <tbody>
							{this.renderData()}
					</tbody>		
				</table>
			</div>	
		)
	}
})

export default List