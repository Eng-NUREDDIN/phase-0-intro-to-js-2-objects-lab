// Write your solution in this file!
const employee = {
    name: "nour",
    streetAddress: "istanbul,turkey",
  };

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let newData={[key]:value};
     return {...employee,...newData};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function  deleteFromEmployeeByKey(employee, key){
const newEmploye={...employee};
 delete newEmploye[key];
 return newEmploye;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee ;
}
