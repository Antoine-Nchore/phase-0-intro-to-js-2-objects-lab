// Initialize the employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update an employee Object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new Object using the spread operator to keep the original employee unchanged
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update an employee Object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Modify the original employee Object
    employee[key] = value;
    return employee; // Return the modified Object (although this is not required)
  }
  
  // Function to delete a key-value pair from an employee Object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new Object using the spread operator while omitting the specified key
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair from an employee Object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee Object
    delete employee[key];
    return employee; // Return the modified Object (although this is not required)
  }
  
  // Testing the functions
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log(updatedEmployee);
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(destructiveUpdate);
  
  const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log(employeeWithoutName);
  
  const destructiveDelete = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructiveDelete);
  
  // The original employee Object remains unchanged
  console.log(employee);
