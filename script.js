// Select the button and list items
const button = document.querySelector('#chooseButton');
const items = document.querySelectorAll('li');
const resultDiv = document.querySelector('#result');

// Add event listener to the button
button.addEventListener('click', function() {
  // Generate a random index based on the number of names
  const randomIndex = Math.floor(Math.random() * items.length);
  
  // Get the randomly selected name
  const selectedName = items[randomIndex].textContent;
  
  // Display the result
  resultDiv.textContent = selectedName + " will pray!";
  
  // Highlight the selected name
  // First, remove highlight from all items
  items.forEach(item => {
    item.classList.remove('selected');
  });
  
  // Then add highlight to the selected item
  items[randomIndex].classList.add('selected');
});
