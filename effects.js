// function to pause GIF when not hovering and play when hovering

document.addEventListener("DOMContentLoaded", function () { 
  const gifImage = document.querySelector(".hover-gif");

  // Set the default static image when the page loads
  gifImage.src = "images/Lighthouse Follower-still-big.png";

  gifImage.addEventListener("mouseenter", function () {
    // Change the image source to the GIF when hovering
    gifImage.src = "images/Lighthouse Follower-animation-big.gif";
  });

  gifImage.addEventListener("mouseleave", function () {
    // Revert back to the static image when not hovering
    gifImage.src = "images/Lighthouse Follower-still-big.png";
  });
});
