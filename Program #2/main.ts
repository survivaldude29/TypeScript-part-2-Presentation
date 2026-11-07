/*  In this program...
*   
  !!! 2 mins each code secton = 6 mins
  !!! Expect questions to answers
*   (We will comment out the programs accordingly.)
*/

// THIS SHOWS THE STRONGEST SCALABILITY AND REUSABILITY EXAMPLE
//Generics example
interface Resource<T> {
    id: number;
    resourceName: string;
    data: T;
}
const person: Resource<object> = {

    // Generic interface with objects
    id: 1,
    resourceName: 'Person',
    data: {
        name: 'John',
        age: 25,
    }
}

console.log(person);

const employee: Resource<string[]> =
{
    // Generic interface with strings array
    id: 2,
    resourceName: 'Employee',
    data: ['Employee 1', 'Employee 2']
}

console.log(employee);

const product: Resource<number> = {
    id: 3,
    resourceName: 'Product',
    data: 150
};

console.log(product);


const customer: Resource<object> = {

    // Generic interface with objects
    id: 4,
    resourceName: 'Customer',
    data: {
        name: 'John Smith',
        age: 30,
    }
}

console.log(customer);
