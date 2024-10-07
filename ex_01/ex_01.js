function displayAgentInfo({ age, numbers, firstName, lastName }) {
    let text = `My name is ${lastName}, ${firstName} ${lastName}! I'm agent ${numbers} and I'm ${age} years old.`;
    document.querySelector('p').textContent = text;
}
let list = {
    age: 57,
    numbers: '007',
    firstName: 'James',
    lastName: 'Bond'
};
window.onload = () => displayAgentInfo(list);