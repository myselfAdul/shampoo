// script.js

// Sample data array
const data = [
  {
    title: "The Guest House",
    description:
      "This being human is a guest house. Every morning a new arrival. A joy, a depression, a meanness, some momentary awareness comes as an unexpected visitor.",
  },
  {
    title: "The Wound",
    description: "The wound is the place where the Light enters you.",
  },
  {
    title: "Let Go",
    description:
      "Try not to resist the changes that come your way. Instead let life live through you. And do not worry that your life is turning upside down. How do you know that the side you are used to is better than the one to come?",
  },
  {
    title: "Love's Reason",
    description:
      "I have no companion but Love, no beginning, no end, no dawn. The Soul calls from within me: 'You, ignorant of the fire of Love, set your heart on my sorrow and let me burn.'",
  },
  {
    title: "Unseen Beauty",
    description:
      "Beauty surrounds us, but usually we need to be walking in a garden to know it.",
  },
];

let currentIndex = 0;

// Function to update card with current data
function updateCard(index) {
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");

  titleElement.textContent = data[index].title;
  descriptionElement.textContent = data[index].description;
}

// Event listener for the "Next" button
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < data.length) {
    currentIndex = (currentIndex + 1) % data.length; // Loop back to start
    updateCard(currentIndex);
  }
});

// Initialize the card with the first data entry
updateCard(currentIndex);
