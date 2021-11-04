var message: string = 'Hello, World!';
//create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;

//add the heading the document
document.body.appendChild(heading);
