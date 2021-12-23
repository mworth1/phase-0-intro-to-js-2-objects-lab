const employee = {
    name: "Bob",
    streetAddress: "123 Main st, Seattle, WA, 98112"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Joe",
    "321 Oak st, Seattle, WA, 98112"
);
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const newerEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "Kat",
    "111 Wood ave, Seattle, WA, 98112"
);
function deleteFromEmployeeByKey() {
    const byeEmployee = { ...employee };
    delete byeEmployee.name;
    return byeEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee;
}