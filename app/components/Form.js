import React from 'react';
import autoBind from 'react-autobind';

const Form = React.createClass ({
  // Initiate Form Component
  getInitialState () {
    return {
      employee: {},
      visiblity: 'hidden',
      errorMessage: ''
    }
  },

  //defining proptypes for form
  propTypes: {
    currentEmployee: React.PropTypes.object.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    addEmployee: React.PropTypes.func.isRequired,
    updateEmployee: React.PropTypes.func.isRequired,
    action: React.PropTypes.string.isRequired
  },

  //run when get the props from parent
  componentWillReceiveProps(nextProps) {
    this.setState({
      employee: nextProps.currentEmployee
    })
  },

  //will run to validate the user input and then call updateemployee or addEmployee according to condition
  onSubmit (event) {
    event.preventDefault();
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.state.employee.id == '' || isNaN(this.state.employee.id)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'id is required.'
      });
      return false;
    }
    else if(this.state.employee.name == '') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Name is required.'
      })
      return false;
    }
    else if (!regex.test(this.state.employee.email)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Email should be in proper format.'
      })
      return false;
    }
    else if(this.state.employee.age == '' && isNaN(this.state.employee.age)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Description is required.'
      })
      return false;      
    }
    else if(this.state.employee.gender != 'Male' && this.state.employee.gender != 'Female') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Gender must be either Male or Female.'
      })
      return false;
    }
    else{
      if(this.props.action == 'update')
        this.props.updateEmployee(this.state.employee);
      else if(this.props.action == 'add')
        this.props.addEmployee(this.state.employee);
    }
  },

  //onchange listners
  onIdChange (event) {
    let employee = this.state.employee;
    this.setState({
      employee : Object.assign({},employee,{id:event.target.value}),
      errorMessage: ''
    })
  },

  onNameChange (event) {
    this.setState({
      employee: Object.assign({},this.state.employee,{name:event.target.value}),
      errorMessage: ''
    })
  },

  onEmailChange (event) {
    this.setState({
      employee: Object.assign({},this.state.employee,{email:event.target.value}),
      errorMessage: ''
    })  
  },

  onAgeChange (event) {
    this.setState({
      employee: Object.assign({},this.state.employee,{age:event.target.value}),
      errorMessage: ''
    })
  },

  onGenderChange (event) {
    this.setState({
      employee: Object.assign({},this.state.employee,{gender:event.target.value}),
      errorMessage: ''
    })
  },

  //render form
  render() {
    return (
      <form className = "employee-form" onSubmit = {this.onSubmit} >
        <span className = {this.state.visiblity}>{this.state.errorMessage}</span>
        <br></br>
        <input type="number" placeholder = "id(required)" required = "true" value = {this.state.employee.id ? this.state.employee.id : ''  } onChange = {this.onIdChange} />
        <br></br>
        <input type="text" placeholder = "name(required)" required = "true" value = {this.state.employee.name ? this.state.employee.name : ''} onChange = {this.onNameChange} />
        <br></br>
        <input type="number" placeholder = "age(required)" required = "true" value = {this.state.employee.age ? this.state.employee.age : ''} onChange = {this.onAgeChange} />
        <br></br>
        <input type="email" placeholder = "email(required)" required = "true" value = {this.state.employee.email ? this.state.employee.email : ''} onChange = {this.onEmailChange} />
        <br></br>
        <select onChange = {this.onGenderChange} value = {this.state.employee.gender ? this.state.employee.gender : ''}>
          <option></option>
          <option>Male</option>
          <option>Female</option>
        </select>   
        <br></br>
        <button type = "submit">{this.props.action}</button>
        <button onClick = {this.props.onCancel} >cancel</button>
      </form>  
    )    
  }
})

export default Form;
