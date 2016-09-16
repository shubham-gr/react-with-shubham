import actions from './actions';

let id = 1;
export function editEmployee(employee) {
    return {
      type: actions.EDIT_EMPLOYEE,
      employee  
    }
  }

export function addEmployee(employee) {
    return {
      type: actions.ADD_EMPLOYEE,
      id: id++,
      employee
    } 
  }

export function  deleteEmployee(employee) {
    return {
      type: actions.DELETE_EMPLOYEE,
      employee
    } 
  }

export function updateEmployee(employee) {
    return {
      type: actions.UPDATE_EMPLOYEE,
      employee
    }
  }
