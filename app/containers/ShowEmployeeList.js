import { connect } from 'react-redux'
import actions  from '../actions/actions'
import EmployeeTableView from '../components/EmployeeTableView'
import { initialize } from 'redux-form'


const mapStateToProps = (state) => {
  console.log("***********************list container state****************************")
  console.log(state);
  console.log("******************************************")
  return {
    employees: state.employeeReducer.employees,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (employee) => {
      dispatch(initialize('employeeForm',{name: employee.name, age: employee.age, email: employee.email, gender: employee.gender}))
    }
  }
}

const ShowEmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeTableView)

export default ShowEmployeeList