import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addEmployee, editEmployee } from '../actions'


class EmployeeForm extends React.Component {
  
  render() {
    let name, age, email, gender
    // const {reset} = this.props
    const handleAdd = (e) => {
      e.preventDefault();
      this.props.dispatch(addEmployee({name:name.value, age: age.value, email: email.value, gender: gender.value}))
      this.props.reset()
    }
    return (
      <form name = "employeeData" onSubmit={handleAdd}>
        <div>
          <label>Name</label>
          <div>
            <Field name="name" component="input" type="text" placeholder="Name" 
              ref = {(node) => {
                name = node
                }
              }
            />
          </div>
        </div>
        <div>
          <label>Age</label>
          <div>
            <Field name="age" component="input" type="number" placeholder="Age" 
              ref = {(node) => {
                age = node
                }
              }
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"
              ref = {(node) => {
                email = node
                }
              }
            />
          </div>
        </div>
        <div>
          <label>Gender</label>
          <div>
            <Field name="gender" component="select" 
              ref={(node) => {
                gender = node 
                }
              } 
            >
              <option></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
          </div>
        </div>
        <div>
          <button type="submit" >Submit</button>
          <button type="button" >Clear</button>
        </div>
      </form>
    )
  }  
}

EmployeeForm = reduxForm({
  form: 'employeeForm'  
})(EmployeeForm)

EmployeeForm = connect()(EmployeeForm)

export default EmployeeForm