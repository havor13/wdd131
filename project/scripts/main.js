// =======================
// Workshop Data & Render
// =======================
const workshops = [
  {
    title: "HTML & CSS Basics",
    date: "October 12, 2025",
    location: "Kumasi Hive",
    image: "images/html-css-workshop.jpg"
  },
  {
    title: "JavaScript Essentials",
    date: "October 19, 2025",
    location: "KNUST Innovation Hub",
    image: "images/js-workshop.jpg"
  },
  {
    title: "Instructional Design",
    date: "October 26, 2025",
    location: "Tech Junction Lab",
    image: "images/instructional-design.jpg"
  }
];

function renderWorkshops() {
  const container = document.getElementById("workshop-list");
  if (!container) return;

  container.innerHTML = workshops.map(workshop => `
    <div class="workshop-card">
      <img src="${workshop.image}" alt="${workshop.title}" loading="lazy" />
      <h3>${workshop.title}</h3>
      <p><strong>Date:</strong> ${workshop.date}</p>
      <p><strong>Location:</strong> ${workshop.location}</p>
    </div>
  `).join("");
}

// =======================
// DOM Ready
// =======================
document.addEventListener("DOMContentLoaded", function () {
  // Render workshops
  renderWorkshops();

  // Contact Form Logic
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

  // Workshop Registration Logic
  const workshopForm = document.getElementById("workshop-form");
  const confirmation = document.getElementById("registration-confirmation");

  if (workshopForm && confirmation) {
    workshopForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("participant-name").value.trim();
      const topic = document.getElementById("workshop-topic").value;

      if (name && topic) {
        confirmation.textContent = `Thank you, ${name}, for registering for the "${topic}" workshop!`;
        localStorage.setItem("lastWorkshop", topic);
        workshopForm.reset();
        previewImage.style.display = "none"; // Hide image after submission
      } else {
        confirmation.textContent = "Please fill out all fields before submitting.";
      }
    });
  }

  // Topic Image Preview Logic
  const topicSelect = document.getElementById("workshop-topic");
  const previewImage = document.getElementById("preview-image");

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
