const employee = {
    name : "Mary",
    streetAddress : "Nairobi",
}

function updateEmployeeWithKeyAndValue(employeeList, key, value) {
    const newEmployee = {...employeeList};

    newEmployee[key] = value;
    return newEmployee;
    
};
updateEmployeeWithKeyAndValue(
    employee,
    "John",
    "Thika"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employeeList, key, value) {
    employeeList[key] = value;
    return employeeList;
    
};
destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "Ann",
    "Mombasa",
);

function deleteFromEmployeeByKey(employeeList) {
    const newEmployee = {...employeeList};

    delete newEmployee.name;
    return newEmployee;
};
deleteFromEmployeeByKey(employee);

function destructivelyDeleteFromEmployeeByKey(employeeList) {
    delete employeeList.name;
    return employeeList;
}
destructivelyDeleteFromEmployeeByKey(employee);