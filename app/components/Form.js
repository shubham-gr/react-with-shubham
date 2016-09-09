import React from 'react';
import autoBind from 'react-autobind';

class Form extends React.Component {
  // constructor for Form Component 
  constructor (props) {
    super (props);
    autoBind (this);
    this.state = {
      employeeId: '',
      employeeName: '',
      employeeAge: '',
      employeeEmail: '',
      employeeGender: '',
      visiblity: 'hidden',
      errorMessage: ''
    }
  }
  //defining proptypes for form
  propTypes: {
    onChange: React.PropTypes.func.isRequired;
    onSubmit: React.PropTypes.func.isRequired;
  }


  onSubmit (event) {
    event.preventDefault();
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.state.employeeId == '' || isNaN(this.state.employeeId)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'id is required.'
      });
      return false;
    }
    else if(this.state.employeeName == '') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Name is required.'
      })
      return false;
    }
    else if (!regex.test(this.state.employeeEmail)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Email should be in proper format.'
      })
      return false;
    }
    else if(this.state.employeeAge == '' && isNaN(this.state.employeeAge)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Description is required.'
      })
      return false;      
    }
    else if(this.state.employeeGender != 'Male' && this.state.employeeGender != 'Female') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Gender must be either Male or Female.'
      })
      return false;
    }
    else{
        this.props.addEmployee(this.state.employeeId, this.state.employeeName, this.state.employeeEmail, this.state.employeeAge, this.state.employeeGender);
    }

  }

  onIdChange (e) {
    this.setState({
       employeeId: e.target.value,
       errorMessage: ''
    })
    console.log(this.state);     
  }

  onNameChange (e) {
    this.setState({
       employeeName: e.target.value,
       errorMessage: ''
    })
  }

  onEmailChange (e) {    
    this.setState({
      employeeEmail: e.target.value,
      errorMessage: ''
    })  
  }

  onAgeChange (e) {
    this.setState({
       employeeAge: e.target.value,
       errorMessage: ''
    })
  }

  onGenderChange (e) {
    console.log(e.target.value);
    this.setState({
      employeeGender: e.target.value,
      errorMessage: ''
    })
  }


  
  render() {
    return (
      <form className = "employee-form" onSubmit = {this.onSubmit} >
        <span className = {this.state.visiblity}>{this.state.errorMessage}</span>
        <br></br>
        <input type="number" placeholder = "id(required)" required = "true" onChange = {this.onIdChange} />
        <br></br>
        <input type="text" placeholder = "name(required)" required = "true" onChange = {this.onNameChange} />
        <br></br>
        <input type="email" placeholder = "email(required)" required = "true" onChange = {this.onEmailChange} />
        <br></br>
        <input type="number" placeholder = "age(required)" required = "true" onChange = {this.onAgeChange} />
        <br></br>
        <select onChange = {this.onGenderChange} >
          <option></option>
          <option>Male</option>
          <option>Female</option>
        </select>   
        <br></br>
        <button type = "submit">Add</button>
      </form>  
    )    
  }
};

export default Form;
