let message: string = 'Hello world!';
console.log(message);

/***************************************************************************************************************************************************************************/

let theStringArr: string[] = ['67', 'Nature', 'The Coding God is not here'];
console.log(theStringArr)
console.log("\n")

let i: number = 0;
do {
console.log(theStringArr[i]); 
i++;
} while ( i < theStringArr.length)

/***************************************************************************************************************************************************************************/

// create a new heading 1 element
let heading1 = document.createElement('h1');
heading1.textContent = message;
document.body.appendChild(heading1);

let heading2 = document.createElement('h2');
heading2.textContent = theStringArr.join(', ');
document.body.appendChild(heading2);

// Create a paragraph
let paragraph1 = document.createElement('p');
paragraph1.textContent = 'I love the Grand Canyon! Grand Canyon 2026!';
document.body.appendChild(paragraph1);

// Create an image
let image1 = document.createElement('img');
image1.src = 'grand_canyon.jpg';
image1.alt = 'A beautiful view of the Grand Canyon';
image1.width = 400;
document.body.appendChild(image1);

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

// // Create a paragraph
// if (typeof document !== "undefined"){
// let paragraph1 = document.createElement('p');
// paragraph1.textContent = 'I love the Grand Canyon! Grand Canyon 2026!';
// document.body.appendChild(paragraph1);
// }

// // Create an image
// if (typeof document !== "undefined"){
// let image1 = document.createElement('img');
// image1.src = 'grand_canyon.jpg';
// image1.alt = 'A beautiful view of the Grand Canyon';
// image1.width = 400;
// document.body.appendChild(image1);
// }


/* Commands
Terminal 1
tsc app.ts
        !!! we can do npx http-server, but once we do it, the output is hardcoded, no matter what you change
npx live-server
(Then follow the port given)

Terminal 2
npx tsc app.ts -w //This updates the js file, which then the js file updates the website
*/