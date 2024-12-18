document.addEventListener("DOMContentLoaded", () => {
  const rainingFlowers = document.querySelector(".raining-flowers");

  function createFlower() {
      const flower = document.createElement("div");
      flower.classList.add("flower");

      const size = Math.random() * 20 + 10; // Random size between 10px and 30px
      flower.style.width = `${size}px`;
      flower.style.height = `${size}px`;

      flower.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
      flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration between 2-5 seconds
      flower.style.animationDelay = `${Math.random() * 2}s`; // Random delay before starting

      rainingFlowers.appendChild(flower);

      // Remove flower after animation ends
      flower.addEventListener("animationend", () => {
          flower.remove();
      });
  }

  // Create flowers at regular intervals
  setInterval(createFlower, 200);
});