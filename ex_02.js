function addCar(agentString, car){
    let obj = JSON.parse(agentString);
    obj.car = car;
    return obj;
}

agentString = '{"age": 57, "numbers": "007", "firstName": "James", "lastName": "Bond"}';
let car = "Ferrari";
let updatedAgent = addCar(agentString, car);
console.log(updatedAgent);