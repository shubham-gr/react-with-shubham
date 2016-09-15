import React from 'react';
import ShowEmployeeList from '../containers/showEmployeeList';
import ShowForm from '../containers/showForm';

const App = React.createClass ({

  //render List and Form component
  render() {
    return (
      <div>
          <ShowEmployeeList />     
          <ShowForm />
      </div>
    )
  }

});

export default App;