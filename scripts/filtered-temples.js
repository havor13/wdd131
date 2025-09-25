const temples = [
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.webp"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "images/salt-lake-temple.webp"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "images/rome-italy-temple.webp"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl: "images/provo-city-center-temple.webp"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "images/paris-france-temple.webp"
  },
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978-10-30",
    area: 59300,
    imageUrl: "images/são-paulo-brazil-temple.webp" 
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.webp"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "images/laie-hawaii-temple.webp"
  },
  {
    templeName: "Kinshasa DR Congo Temple",
    location: "Kinshasa, DR Congo",
    dedicated: "2019-04-14",
    area: 10200,
    imageUrl: "images/kinshasa-congo-temple.webp"
  },
  {
    templeName: "Freetown Sierra Leone Temple",
    location: "Freetown, Sierra Leone",
    dedicated: "2024-09-01",
    area: 8700,
    imageUrl: "images/freetown-sierra-leone-temple.webp"
  }
];

const templeCards = document.querySelector(".gallery");

function displayTemples(templesArray) {
  templeCards.innerHTML = "";

  templesArray.forEach(temple => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
      <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName}" 
        loading="lazy" 
        onerror="this.src='https://via.placeholder.com/300x200?text=Image+Unavailable'"
      >
      <figcaption>${temple.templeName}</figcaption>
    `;

    templeCards.appendChild(figure);
  });
}

function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.id || "home";
      filterTemples(id);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});
