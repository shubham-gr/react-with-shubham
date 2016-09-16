import React from 'react';

const EmployeeRow = ({ employee, onClick }) => (
  <tr>
    <td>{employee.id}</td>
    <td>{employee.name}</td>
    <td>{employee.age}</td>
    <td>{employee.email}</td>
    <td>{employee.gender}</td>
    <td><button onClick={onClick}>Edit</button></td>
  </tr>
)

const EmployeeTableView = ({ employees, onEditClick, children }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Gender</th>
        	<th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {employees && employees.map((employee) => 
          <EmployeeRow 
            key={employee.id} 
            employee={employee} 
            onClick={() => onEditClick(employee)}
          />
        )}
      </tbody>
    </table>
    {children}
  </div>
)

export default EmployeeTableView;