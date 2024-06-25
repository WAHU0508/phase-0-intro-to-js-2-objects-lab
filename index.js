// Write your solution in this file!
const employee = {
    name: "Kouvr James",
    streetAddress: "3614 NY",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newobj = {...obj };
    newobj[key] = value;
    return newobj;
}
const update1 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
console.log(update1);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const update2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(update2);
console.log(employee);

function deleteFromEmployeeByKey() {
    const newObj = {...employee}
    delete newObj.name;
    return newObj;
}
const update3 = deleteFromEmployeeByKey();
console.log(employee.name);
console.log(update3.name);

console.log(employee);
console.log(update3);

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}
destructivelyDeleteFromEmployeeByKey();
console.log(employee);