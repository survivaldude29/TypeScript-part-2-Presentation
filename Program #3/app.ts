let message: string = 'Hello world!';
console.log(message);

let theStringArr: string[] = ['67', 'Git gud', 'The Coding God is not here'];
console.log(theStringArr)
console.log("\n")
/***************************************************************************************************************************************************************************/
// for loops, for of loops, for in loops
// !!while, do while loops are similar enough to be indistinguishable.

// for(let i = 0; i < theStringArr.length; i++)
// {
//  console.log(theStringArr[i]); 
// }

let i: number = 0;
do {
console.log(theStringArr[i]); 
i++;
} while ( i < theStringArr.length)



// type GroceryList = 'Eggs' | 'MILK' | 'buTTER';
// function ShopList(list: GroceryList) {
//   if (list === 'Eggs') 
//     {console.log("I got the eggs");} 
//     //Semicolon and curly braces
    
//   if (list === 'MILK') 
//     console.log("I got the milk")
//     //No semicolon, one line after 'if' statement
  
//   if (list === 'buTTER') 
//   {
//     console.log("I got the butter")
//   } //No semicolon, curly braces
// }
// ShopList('Eggs'); ShopList('MILK'); ShopList('buTTER'); 


//Tuple


// create a new heading 1 element
let heading1 = document.createElement('h1');
heading1.textContent = message;
document.body.appendChild(heading1);


let heading2 = document.createElement('h2');
heading2.textContent = theStringArr.join(', ');
document.body.appendChild(heading2);


// if (typeof document !== "undefined"){
// let heading1 = document.createElement('h1');
// heading1.textContent = message;
// document.body.appendChild(heading1);
// }

// if (typeof document !== "undefined") {
// let heading2 = document.createElement('h2');
// heading2.textContent = theStringArr.join(', ');
// document.body.appendChild(heading2);
// }

// add the heading the document

/* Commands
Terminal 1
tsc app.ts
        !!! we can do npx http-server, but once we do it, the output is hardcoded, no matter what you change
npx live-server
(Then follow the port given)

Terminal 2
npx tsc app.ts -w //This updates the js file, which then the js file updates the website
*/

