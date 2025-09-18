// Footer logic
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Wind chill logic
const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);

function calculateWindChill(t, s) {
  return Math.round(35.74 + 0.6215 * t - 35.75 * s**0.16 + 0.4275 * t * s**0.16);
}

const windChillElement = document.querySelector("#windChill");

if (temp <= 50 && speed > 3) {
  windChillElement.textContent = calculateWindChill(temp, speed) + "°F";
} else {
  windChillElement.textContent = "N/A";
}
