import actions from '../actions/actions'
import initialState from '../initialState'

function employeeReducer(state = initialState , action) {

  console.log("=================")
  console.log(state)
  let employees, position, id, employee
  switch(action.type) {
    case actions.EDIT_EMPLOYEE :
      for (let i=0; i<state.employees.length; i++) {
        if(state.employees[i].id == action.employee.id) {
            position = i;
          }
        }
      id = action.employee.id;
      employee = action.employee;
      return Object.assign({}, state, {activeId: id, currentEmployee: employee, index: position, buttonAction : 'update'})
    
    case actions.ADD_EMPLOYEE :
      let employees1 = state.employees;
      employees1.push(action.employee);
      console.log("adding");
      return Object.assign({},state,{employees: employees1, currentEmployee: {}})
    
    case actions.DELETE_EMPLOYEE :
      for (let i=0; i<state.employees.length; i++) {
        if(state.employees[i].id == action.employee.id) {
          position = i;
        }
      }
      console.log("deelete =============> ",position);
      employees = state.employees;
      employees.splice(position,1);
      console.log(employees)
      return Object.assign({},state,{employees: employees, currentEmployee : {}, activeId: ''})
    
    case actions.UPDATE_EMPLOYEE :
      employees = state.employees;
      employees[state.index] = action.employee;
      return Object.assign({},state,{employees: employees, currentEmployee : {}, activeId: '', buttonAction: 'add'})
    
    case actions.CANCEL :
      return Object.assign({},state,{currentEmployee: {}, activeId: '', buttonAction: 'add'})

    default :
      return state
  }
}


export default employeeReducer