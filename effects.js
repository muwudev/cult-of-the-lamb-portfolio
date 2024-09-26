// function to pause GIF when not hovering and play when hovering

document.addEventListener("DOMContentLoaded", function () {
    const gifImage = document.querySelector(".hover-gif");
  
    gifImage.addEventListener("mouseenter", function () {
      gifImage.src = "images/Lighthouse Follower-animation-big.gif"; // When hovering, display the GIF
    });
  
    gifImage.addEventListener("mouseleave", function () {
      gifImage.src = "images/Lighthouse Follower-still-big.png"; // When not hovering, display the static image
    });
  });