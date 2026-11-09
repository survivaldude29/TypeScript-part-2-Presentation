/*  In this program...
*   We will introduce features of TS, such as Transpilation, JS to TS conversion, and its error prevention abilities.
*   We will also be going over data types, mapping, tuples, and repetition.
*   As you can see, we do not need semicolons due to JS
*   (We will comment out the programs accordingly.)
*/

/***************************************************************************************************************************************************************************/
//Let's designate data types for our values
const add = (x, y) => x + y;
console.log(add('1','1')) 
console.log(add(1,'1'));
console.log(add(1,1))
console.log(add(null,undefined));
console.log();
/***************************************************************************************************************************************************************************/
// Mapping: 
let myMap = new Map<string, number>();
myMap.set(true, '10');
myMap.set('B', 20);
myMap.set('false', '30');
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, value: ${value}`);
});
console.log("")
/***************************************************************************************************************************************************************************/
// Tuple:
let theTuple: [number, boolean, string]
theTuple = ['The Coding God is not here', 55, true,]
console.log(theTuple)
console.log("\n")
/***************************************************************************************************************************************************************************/
//for loops, for of loops, for in loops
//!!while, do while loops are similar enough to be indistinguishable.
for(let i = 0; i < theTuple.length; i++)
{
 console.log(theTuple[i]); 
}