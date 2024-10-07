function addCarToAgent(agent, brand, model, color, power){
if (typeof brand != 'string' || typeof model != 'string' || typeof color != 'string' || typeof power != 'string'){
    console.error("Error: One of the arguments is missing or mistyped.");
return null;
}   
agent.car = {
    brand: brand,
    model: model,
    color: color,
    poxer: power,
};
    return agent;
}
let list = {
age: 57,
numbers: '007',
firstName: 'James',
lastName: 'Bond'
};
let updatedAgent = addCarToAgent(list, "Aston Martin", "DB5", "Silver", "510hp");
if (updatedAgent) {
    shareThatBeauty(updatedAgent);
}