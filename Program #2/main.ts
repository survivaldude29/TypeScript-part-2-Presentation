/*  In this program...
*   
  !!! 2 mins each code secton = 6 mins
  !!! Expect questions to answers
*   (We will comment out the programs accordingly.)
*/
// enum UserRole {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST"
// }

// function Status(role: UserRole) {
//   if (role === UserRole.Guest) 
//     {console.log("Welcome Guest!");} 
//     //Semicolon and curly braces
    
//   if (role === UserRole.User) 
//     console.log("User in Code Spotted!")
//     //No semicolon, one line after 'if' statement
  
//   if (role === UserRole.Admin) 
//   {
//     console.log("Administrator, log-in complete.")
//   } //No semicolon, curly braces
// }
// Status(UserRole.Admin); Status(UserRole.Guest); Status(UserRole.User); 

// console.log()



//UNION VERSION
type UserRole = 'ADMIN' | 'USER' | 'GUEST';

function Status(role: UserRole) {
  if (role === 'ADMIN') 
    {console.log("Welcome Guest!");} 
    //Semicolon and curly braces
    
  if (role === 'USER') 
    console.log("User in Code Spotted!")
    //No semicolon, one line after 'if' statement
  
  if (role === 'GUEST') 
  {
    console.log("Administrator, log-in complete.")
  } //No semicolon, curly braces
}
Status('ADMIN'); Status('USER'); Status('GUEST'); 



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