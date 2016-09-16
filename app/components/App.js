import React from 'react';
import ShowEmployeeList from '../containers/ShowEmployeeList';
import EmployeeForm from '../containers/EmployeeForm';

const App = React.createClass ({

  //render List and Form component
  render() {
    return (
      <div>
          <ShowEmployeeList />     
          <EmployeeForm />
          {this.props.children}
      </div>
    )
  }

});

export default App;