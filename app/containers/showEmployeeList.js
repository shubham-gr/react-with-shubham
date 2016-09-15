import { connect } from 'react-redux'
import {editEmployee, deleteEmployee} from '../actions'
import actions  from '../actions/actions'
import List from '../components/List'


const mapStateToProps = (state) => {
  console.log("list reducer printing................")
  console.log(state.employeeReducer);
  console.log("...............................")
  return {
    employees: state.employeeReducer.employees,
    activeId: state.employeeReducer.activeId,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatcherssssssssssssssssssssssssss");
  return {
    onEditEmployee: (employee) => {
      dispatch(editEmployee(employee))
    },
    onDeleteEmployee: (employee) => {
      dispatch(deleteEmployee(employee))
    }
  }
}

const showEmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default showEmployeeList