import React from 'react';
import autoBind from 'react-autobind';
import List from './List';
import Form from './Form';
import data from '../data';

const App = React.createClass ({
  //defining initial state
  getInitialState() {
    return {
      employees: [],
      currentEmployee: {},
      activeId : '',
      index : 0,
      action : 'add'
    };
  },

  //load data from data.js
  loadSampleData() {
    this.setState(data);
  },

  componentWillMount() {
    this.loadSampleData();
  },

  //find index of object from array => Employees
  findIndex(id) {
    for (let i=0; i<this.state.employees.length; i++) {
      if(this.state.employees[i].id == id)
        return i;
    }
  },

  //will update the form with currentEmployee(edit employee) Details
  onEditEmployee(employee) {
    const index = this.findIndex(employee.id);
    this.setState({
      activeId: employee.id,
      currentEmployee: employee,
      index: index,
      action : 'update'
    });
  },

  //will delete the employee using index
  onDeleteEmployee(employee) {
    const index = this.findIndex(employee.id);
    let employees = this.state.employees;
    employees.splice(index,1);
    this.setState({
      employees: employees,
      currentEmployee : {},
      activeId: ''
    })
  },

  //will add new employee
  addEmployee(newEmployee) {
    let employees = this.state.employees;
    employees.push(newEmployee);
    this.setState({
      employees: employees
    });
  },

  //will update employee using index
  updateEmployee(updateEmployee) {
    let employees = this.state.employees;
    employees[this.state.index] = updateEmployee;
    this.setState({
      employees: employees,
      currentEmployee : {},
      activeId: '',
      action: 'add'
    })
  },

  //on cancel(reset) form
  onCancel(){
    this.setState({
      currentEmployee : {},
      activeId: '',
      action: 'add'
    })
  },

  //render List and Form component
  render() {
    return (
      <div>
        <div>
          <List employees = {this.state.employees} onEditEmployee = {this.onEditEmployee} onDeleteEmployee = {this.onDeleteEmployee} activeId = {this.state.activeId}/>     
        </div>
        <div>
          <Form addEmployee = {this.addEmployee} updateEmployee = {this.updateEmployee} currentEmployee = {this.state.currentEmployee} action = {this.state.action} onCancel = {this.onCancel} />
        </div>
      </div>
    )
  }

});

export default App;