// Global variable
let isModalVisible = false;

// Function with parameters and return value
function toggleClass(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function to animate the box
function animateBox() {
  const box = document.getElementById('box');
  toggleClass(box, 'animate');
}

// Function to toggle modal visibility
function toggleModal() {
  const modal = document.getElementById('modal');
  isModalVisible = toggleClass(modal, 'show');
  modal.classList.toggle('hidden', !isModalVisible);
}

// Function to flip the card
function flipCard() {
  const card = document.getElementById('flipCard');
  toggleClass(card, 'flipped');
}

// Event listeners
document.getElementById('animateBtn').addEventListener('click', animateBox);
document.getElementById('toggleModal').addEventListener('click', toggleModal);
document.getElementById('flipBtn').addEventListener('click', flipCard);