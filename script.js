// Get the containers and reset button
const container1 = document.getElementsByClassName('container')[0];
const container2 = document.getElementsByClassName('container')[1];
const resetButton = document.getElementById('reset-btn');

// Add event listeners for drag events
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Add event listener for reset button
resetButton.addEventListener('click', resetContainers);

// Store the dragged item
let draggedItem = null;

// Function to handle drag start event
function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.effectAllowed = 'move';
}

// Function to handle drag over event
function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();
  
  // Append the dragged item to the second container
  container2.appendChild(draggedItem);

  // Reset the dragged item
  draggedItem = null;

  // Display success message
  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.innerText = 'Item dropped successfully!';
  container2.appendChild(successMessage);
}

// Function to handle reset button click event
function resetContainers() {
  // Clear the second container
  container2.innerHTML = '<h2>Container 2</h2>';

  // Reset the first container
  container1.innerHTML = `
    <h2>Container 1</h2>
    <div class="item" draggable="true"><img src="i1.jpg" alt="this is an image"/></div>
    <div class="item" draggable="true"><p>This is the text area where you can drag this section to another container</p></div>
    <div class="item" draggable="true"><img src="icon.png" alt="this is an icon"/></div>
  `;
}