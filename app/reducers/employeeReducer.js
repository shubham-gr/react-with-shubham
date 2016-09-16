import actions from '../actions/actions'
import initialState from '../initialState'

function employeeReducer(state = initialState , action) {

  console.log("================= employee reduce ****************************************")
  console.log(state,action)
  console.log("*********************")
  let employees, position, id, employee
  switch(action.type) {
    
    case actions.ADD_EMPLOYEE :
      return {
        employees: [
          ...state.employees,
          {
            id: action.id,
            name: action.employee.name,
            age: action.employee.age,
            email: action.employee.email,
            gender: action.employee.gender
          }
        ]
      }
    
    // case actions.DELETE_EMPLOYEE :
    //   for (let i=0; i<state.employees.length; i++) {
    //     if(state.employees[i].id == action.employee.id) {
    //       position = i;
    //     }
    //   }
    //   console.log("deelete =============> ",position);
    //   employees = state.employees;
    //   employees.splice(position,1);
    //   console.log(employees)
    //   return Object.assign({},state,{employees: employees, currentEmployee : {}, activeId: ''})
    
    case actions.UPDATE_EMPLOYEE :
      console.log("updating");
      employees = state.employees;
      employees[state.index] = action.employee;
      return Object.assign({},state,{employees: employees, currentEmployee : {}, activeId: '', buttonAction: 'add'})

    default :
      return state
  }
}


export default employeeReducer