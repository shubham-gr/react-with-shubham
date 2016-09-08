import React from 'react';
import autoBind from 'react-autobind';
import List from './List';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      "employees": {}
    };
  }
  loadSampleData() {
    this.setState(data);
  }

  componentWillMount() {
    this.loadSampleData();
  }

  render() {
    return (
      <div>
        <List employees = {this.state.employees} />     
      </div>
    )
  }
};

export default App;