import React from 'react';
import autoBind from 'react-autobind';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

  }

  render() {
    return (
      <tr className = "list-item">
        {Object.keys(this.props.details).map(function(val, idx) {
          return (<td key={idx} > {this.props.details[val]}</td>)    
        }.bind(this))}
      </tr>
    )
  }
}

export default ListItem