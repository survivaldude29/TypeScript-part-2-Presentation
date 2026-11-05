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
//Mapping: .set(key, value)   .get(key)   .has(key)   .delete(key)   .size()   .clear()
let myMap = new Map<string, number>();
myMap.set('A', 10);
myMap.set('B', 20);
myMap.set('C', 30);
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, value: ${value}`);
});
console.log("")
/***************************************************************************************************************************************************************************/
let theTuple: [number, boolean, string]
theTuple = [55, true, 'The Coding God is not here']
console.log(theTuple)
console.log("\n")
/***************************************************************************************************************************************************************************/
//for loops, for of loops, for in loops
//!!while, do while loops are similar enough to be indistinguishable.
for(let i = 0; i < theTuple.length; i++)
{
 console.log(theTuple[i]); 
}