// Object containing Person information
const person = {
    id: 1,
    resourceName: 'Person',
    data: {
        name: 'John',
        age: 25,
    }
};

console.log(person);


// Object containing Employee information
const employee = {
    id: 2,
    resourceName: 'Employee',
    data: ['Employee 1', 'Employee 2']
};

console.log(employee);


// Object containing Product information (Showing Mistakes)
const product = {
    id: '3', // ID should be a number
    resourceName: 'Product',
    data: 150
};

console.log(product);


// Object containing Customer information (Showing Mistakes)
const customer = {
    id: 4,
    resourceName: 'Customer',
    data: 'John Smith' // Different data structure
};

console.log(customer);