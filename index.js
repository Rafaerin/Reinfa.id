// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  beda lagi ya ini 
const now = new Date();
        const hour = now.getHours(12);
        let greeting;

        if (hour >= 5 && hour < 12) {
          greeting = "Selamat Pagi!";
      } else if (hour >= 12 && hour < 15) {
          greeting = "Selamat Siang!";
      } else if (hour >= 15 && hour < 18) {
          greeting = "Selamat Sore!";
      } else {
          greeting = "Selamat Malam!";
      }

      document.getElementById("greeting").textContent = greeting;

      function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial call to set the clock when the page loads
    updateClock();

    

document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('animation-carousel');
    const carousel = new Carousel(carouselElement, {
        interval: 5000,
        indicators: {
            activeIndicator: 'bg-white',
            indicator: 'bg-gray-400'
        }
    });

    // Custom styles
    const items = carouselElement.querySelectorAll('[data-carousel-item]');
    items.forEach(item => {
        item.style.width = '50%';
        item.style.margin = '0 auto';
    });

    // Change active slide atau mengubah slide aktif (biar ga lupa)
    carousel.to(2); // Change to the 3rd slide

    // Callback functions atau memanggil fungsi (ingatin kalau begini)
    carouselElement.addEventListener('slide.bs.carousel', function (event) {
        console.log('Slide event:', event);
    });
});
