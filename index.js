// Write your code here!
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set its text content
newHeader.textContent = "Nelson is the champion"; // 👈 use your name

// (Optional) Append to body if needed
document.body.appendChild(newHeader);