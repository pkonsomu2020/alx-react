import $ from 'jquery';
import debounce from 'lodash/debounce';

// Create elements and add content
const $body = $('body');
$body.append('<p>Holberton Dashboard</p>');
$body.append('<p>Dashboard data for the students</p>');
$body.append('<button id="start">Click here to get started</button>');
$body.append('<p id="count"></p>');
$body.append('<p>Copyright - Holberton School</p>');

// Function to update the counter
let count = 0;
const $count = $('#count');
function updateCounter() {
  count++;
  $count.text(`${count} clicks on the button`);
}

// Bind debounce function to the click event
$('#start').on('click', debounce(updateCounter, 300));
