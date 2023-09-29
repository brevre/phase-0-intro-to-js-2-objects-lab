// Write your solution in this file!
// Define the initial employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  // Function to update an employee's information with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update an employee's information with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from an employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair from an employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Smith');
  console.log(updatedEmployee);
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
  console.log(destructiveUpdate);
  
  const employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
  console.log(employeeWithoutName);
  
  const destructiveDelete = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(destructiveDelete);
  