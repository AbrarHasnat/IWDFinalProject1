
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the first slide 
showSlide(currentSlide); 

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    // You can customize AOS settings here
    duration: 1200, // Duration of animation in milliseconds
    easing: 'ease-in-out', // Easing function for the animation
    once: true, // Whether animation should happen only once
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentYear = 2024;
    let currentMonth = 0; // January

    const monthNameElem = document.getElementById('month-name');
    const calendarGridElem = document.querySelector('.calendar-grid');

    const updateCalendar = () => {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Generate day headers
        const headers = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        calendarGridElem.innerHTML = headers.map(day => `<div class="calendar-day header">${day}</div>`).join('');

        // Generate empty cells for the days before the start of the month
        const emptyCells = '<div class="calendar-day empty"></div>'.repeat(firstDay);

        // Generate days of the month
        const days = Array.from({ length: daysInMonth }, (_, i) => `<div class="calendar-day">${i + 1}</div>`).join('');

        calendarGridElem.innerHTML += emptyCells + days;

        // Update month name
        monthNameElem.textContent = `${months[currentMonth]} ${currentYear}`;
    };

    document.getElementById('prev-month').addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        updateCalendar();
    });

    document.getElementById('next-month').addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        updateCalendar();
    });

    // Initialize calendar
    updateCalendar();
});

