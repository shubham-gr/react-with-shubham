import { connect } from 'react-redux'
import {addEmployee, updateEmployee, onCancel} from '../actions'
import actions  from '../actions/actions'
import Form from '../components/Form'


const mapStateToProps = (state) => {
  return {
    buttonAction: state.employeeReducer.buttonAction,
    currentEmployee: state.employeeReducer.currentEmployee,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("formdispatcherssssssssssssssssssssssssss");
  return {
    onAddEmployee: (employee) => {
      console.log("addddsahkjeemployee");
      dispatch(addEmployee(employee))
    },
    onUpdateEmployee: (employee) => {
      dispatch(updateEmployee(employee))
    },
    onCancel: () => {
      dispatch(onCancel())
    }
  }
}

const showForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default showForm