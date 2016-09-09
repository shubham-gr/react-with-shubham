import React from 'react';
import autoBind from 'react-autobind';
import List from './List';
import Form from './Form';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      employees: [{},{}]
    };
  }
  loadSampleData() {
    this.setState(data);
  }

  componentWillMount() {
    this.loadSampleData();
  }

  addEmployee(id, name, email, age, gender){
    let employee = this.state.employees;
    employee.push({id: id, name: name, email: email, age: age, gender: gender})
    console.log(employee);
    this.setState({employees: employee}, console.log(this.state));
  }

  render() {
    return (
      <div>
        <div>
          <List employees = {this.state.employees} />     
        </div>
        <div>
          <Form addEmployee = {this.addEmployee}/>
        </div>
      </div>
    )
  }
};

export default App;