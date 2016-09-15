import React from 'react';
import ListItem from './ListItem';

const List = React.createClass({

	makeId()
	{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
	},

	componentWillMount() {
		console.log('chala');
	},

  componentWillReceiveProps(nextProps) {
		console.log("000000000000000000000000")
		console.log(nextProps)
	},

	// render List Component
	renderData() {
		let listItems = this.props.employees && this.props.employees.map( (employee) => {
			return (
			  <ListItem 
					key={employee.id + this.makeId()} 
					onEdit = {() => this.props.onEditEmployee(employee)} 
					onDelete = {() => this.props.onDeleteEmployee(employee)} 
					editClass={employee.id === this.props.activeId ? 'highlight-row' : null}  
					details = {employee} 
				/>
			)
		})
		return(listItems)
	},

	render() {

		console.log("Employee List=======================")
		console.log(this.props.employees)

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