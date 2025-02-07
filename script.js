document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel(
      document.getElementById("watchSlider"),
      {
        ride: "carousel", // Ensure the carousel automatically starts
        touch: true,
        interval: 3000,
        wrap: true,
      }
    );
  
    const progressBar = document.querySelector(".carousel-progress-bar");
    const totalItems = document.querySelectorAll(".carousel-item").length;
  
    // Function to update the progress bar width
    function updateProgressBar() {
      const activeIndex = Array.from(
        document.querySelectorAll(".carousel-item")
      ).indexOf(document.querySelector(".carousel-item.active"));
      const progress = (activeIndex / (totalItems - 1)) * 325;
      progressBar.style.width = progress + "%";
    }
  
    // Listen for the slide change event to update progress bar
    document
      .getElementById("watchSlider")
      .addEventListener("slid.bs.carousel", function () {
        updateProgressBar();
      });
  
    // Initialize progress bar width on page load
    updateProgressBar();
  });
  
  // Automatically cycle through the slides
  const carousel = document.querySelector("#testimonialCarousel");
  new bootstrap.Carousel(carousel, {
    interval: 5000, // 5 seconds
    ride: "carousel",
  });
  