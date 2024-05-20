const adviceText = document.getElementById('advice');
const generateButton = document.getElementById('generate-btn');

const adviceList = [
  "Don't be afraid to step outside your comfort zone.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Be kind to yourself and others.",
  "Believe in yourself and your dreams.",
  "Never stop learning and growing.",
];

function generateAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  const advice = adviceList[randomIndex];
  adviceText.textContent = advice;
}

generateButton.addEventListener('click', generateAdvice);
