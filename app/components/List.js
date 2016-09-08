import React from 'react';
import autoBind from 'react-autobind';
import ListItem from './ListItem';

class List extends React.Component {
	constructor(props) {
	    super(props);
	    autoBind(this);
	}

	renderData() {
		let listItems = this.props.employees.map( (employee) => {
			return (<ListItem key={employee.id} details = {employee} />)
		})
		return(listItems)
	}

	render() {
		console.log()
		return (
			<div>
				<div className="page-header">
					<h1>Employees<small>@techRacers</small></h1>
				</div>
				<table id="list">
					<thead>
	            <td>#</td>
	            <td>name</td>
	            <td>age</td>
	            <td>email</td>
	            <td>gender</td>
	        </thead>
	        <tbody >
							{this.renderData()}
					</tbody>		
				</table>
			</div>	
			)
	}
}

export default List