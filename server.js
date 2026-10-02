// var h1 = document.createElement('h1');



// h1.innerHTML = `Hello, I am Siddharth`;

// console.log(h1);


// document.body.appendChild(h1); //the elememt is append in the body of the html page





// React js is a library which is used to create user interface(UI) in a web application. It is a component based library which means we can create multiple components and use them in our application. React js is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
// Example of Library- GSAP
//                   - Lenis
//                   - ReactJS
//  libraries me har ek features alag alag milega, and uses its easy




// and the framework is given to the user to create the components and use them in the application. React js is a library which is used to create user interface(UI) in a web application. It is a component based library which means we can create multiple components and use them in our application. React js is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
// Example of Framework- Angular
//                     -Next js
// framework me har ek features ek sath milega and user ko use karna hoga. Frameworks are more opinionated than libraries, which means they come with a set of rules and conventions that developers must follow. This can make it easier to get started with a framework, but it can also limit flexibility and creativity.




import user from './app.js';
import { a } from './app.js';

console.log(a);
console.log(user);

// ***************************************IMPORTANT********************************
//  when we use {} to import a variable from another file, it means we are importing a named export. In this case, we are importing the variable a from the app.js file. Named exports allow us to export multiple variables from a single file and import them individually in other files.
// but without {} we are importing the default export from the app.js file. In this case, we are importing the variable user. Default exports allow us to export a single variable from a file and import it without using {} in other files.


// real DOM -->> is a tree-like structure that represents the entire HTML document. It is a representation of the web page in memory, and it allows JavaScript to manipulate the content and structure of the page. The real DOM is created by the browser when it parses the HTML document, and it is updated whenever the content of the page changes. However, manipulating the real DOM can be slow and inefficient, especially for complex applications with many components.
//  Virtual DOM -->> is a lightweight copy of the real DOM that is kept in memory. It is a representation of the UI that React uses to optimize updates to the real DOM. When a component's state changes, React creates a new virtual DOM tree and compares it to the previous virtual DOM tree using a process called "reconciliation." It then calculates the minimum number of changes needed to update the real DOM and applies those changes in a single batch, which can improve performance and reduce the number of reflows and repaints in the browser.


// JSX -->> JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. It is used in React to define the structure and content of components. JSX is not valid JavaScript, so it needs to be transpiled into regular JavaScript before it can be executed by the browser. This is typically done using a tool like Babel, which converts JSX into React.createElement() calls that create the virtual DOM elements.