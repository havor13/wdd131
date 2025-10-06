document.addEventListener("DOMContentLoaded", function () {
  // =======================
  // Contact Form Logic
  // =======================
  const contactForm = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  if (contactForm && thankYouMessage) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.style.display = "none";
      thankYouMessage.style.display = "block";
      contactForm.reset();
    });
  }

  // =======================
  // Workshop Registration Logic
  // =======================
  const workshopForm = document.getElementById("workshop-form");
  const confirmation = document.getElementById("registration-confirmation");
  const thankYouNote = document.getElementById("workshop-thank-you");
  const previewImage = document.getElementById("preview-image");

  if (workshopForm && confirmation) {
    workshopForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("participant-name").value.trim();
      const topic = document.getElementById("workshop-topic").value;

      if (name && topic) {
        confirmation.textContent = `Thank you, ${name}, for registering for the "${topic}" workshop!`;

        // Hide form and preview image
        workshopForm.style.display = "none";
        if (previewImage) previewImage.style.display = "none";

        // Show thank-you note if it exists
        if (thankYouNote) {
          thankYouNote.style.display = "block";
        }

        workshopForm.reset();
      } else {
        confirmation.textContent = "Please fill out all fields before submitting.";
      }
    });
  }

  // =======================
  // Topic Image Preview Logic
  // =======================
  const topicSelect = document.getElementById("workshop-topic");

  const topicImages = {
    "HTML & CSS Basics": "images/html-css-workshop.webp",
    "JavaScript Essentials": "images/js-workshop.webp",
    "Instructional Design": "images/instructional-design.webp"
  };

  if (topicSelect && previewImage) {
    topicSelect.addEventListener("change", function () {
      const selected = topicSelect.value;
      if (topicImages[selected]) {
        previewImage.src = topicImages[selected];
        previewImage.alt = selected + " preview";
        previewImage.style.display = "block";
      } else {
        previewImage.style.display = "none";
      }
    });
  }
});
