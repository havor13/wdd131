// Store mentor names in localStorage
const mentors = [
  { name: "Ama Boateng", specialty: "Web Development" },
  { name: "Kwame Mensah", specialty: "Instructional Design" },
  { name: "Akosua Owusu", specialty: "UI/UX Design" }
];

localStorage.setItem("kumasiMentors", JSON.stringify(mentors));

// Display mentor list dynamically
function displayMentors() {
  const section = document.createElement("section");
  section.innerHTML = `<h2>Featured Mentors</h2>`;
  
  mentors.forEach((mentor) => {
    const card = document.createElement("div");
    card.className = "mentor-card";
    card.innerHTML = `
      <h3>${mentor.name}</h3>
      <p>Specialty: ${mentor.specialty}</p>
    `;
    section.appendChild(card);
  });

  document.body.appendChild(section);
}

// Toggle color theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const mode = body.classList.contains("dark-mode") ? "Dark" : "Light";
  alert(`Switched to ${mode} Mode`);
}

// Add button to toggle theme
const themeBtn = document.createElement("button");
themeBtn.textContent = "Toggle Theme";
themeBtn.style.margin = "1rem";
themeBtn.addEventListener("click", toggleTheme);
document.body.appendChild(themeBtn);

// Run mentor display on page load
document.addEventListener("DOMContentLoaded", displayMentors);
