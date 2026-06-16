/* 
 * BharatYatra Travel Booking - Simple Javascript
 * Handles modal booking updates, calculations, and form alerts.
 */

let selectedTitle = "";
let selectedPrice = 0;

// Get input elements from DOM
const bookingTitle = document.getElementById("booking-modal-title");
const bookingGuests = document.getElementById("booking-guests");
const bookingDuration = document.getElementById("booking-duration");
const bookingTotal = document.getElementById("booking-total-price");
const bookingDate = document.getElementById("booking-date");

// Setup travel date minimum constraint to today
const today = new Date().toISOString().split('T')[0];
if (bookingDate) {
    bookingDate.min = today;
}

// Function to select package and open modal
function selectDestination(title, price) {
    selectedTitle = title;
    selectedPrice = price;

    // Update modal text
    if (bookingTitle) {
        bookingTitle.innerText = "Book Trip to " + title;
    }

    // Reset guests and duration to defaults
    if (bookingGuests) bookingGuests.value = 1;
    if (bookingDuration) bookingDuration.value = 3;

    // Calculate initial price
    updateEstimate();

    // Show bootstrap modal
    const modalElement = document.getElementById("bookingModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Update estimate cost: Price * Guests * Days
function updateEstimate() {
    const guests = parseInt(bookingGuests.value) || 1;
    const days = parseInt(bookingDuration.value) || 3;
    
    // Simple calculation logic
    const total = selectedPrice * guests * days;
    
    if (bookingTotal) {
        bookingTotal.innerText = "₹" + total.toLocaleString('en-IN');
    }
}

// Event listeners to calculate price dynamically when user types
if (bookingGuests) bookingGuests.addEventListener("input", updateEstimate);
if (bookingDuration) bookingDuration.addEventListener("input", updateEstimate);

// Handle Booking Form Submit
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop page reload
        
        const name = document.getElementById("booking-name").value;
        
        // Hide modal
        const modalElement = document.getElementById("bookingModal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }

        // Show confirmation alert
        alert("Thank you " + name + "! Your booking for " + selectedTitle + " is confirmed.");
        
        bookingForm.reset();
    });
}

// Handle Contact Form Submit
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop page reload
        
        const name = document.getElementById("contact-name").value;
        
        alert("Thank you " + name + "! We have received your message and will contact you soon.");
        
        contactForm.reset();
    });
}
