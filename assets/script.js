
// Sélection des flèches
const prevButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const dotsContainer = document.querySelector(".dots");
const tagLine = document.querySelector(".tagline"); // Sélection de l'élément texte

// Tableau des images du slider
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let currentIndex = 0; //permet de savoir quelle image est affichée

// Fonction pour afficher l'image, le texte et mettre à jour les bullet points
function showImage(index) {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Chemin correct pour l'image
  tagLine.innerHTML = slides[index].tagLine; // Mise à jour du texte
  updateDots(index);
}

// Générer les bullet points en fonction du nombre d'images
function createDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot_selected"); // La première diapositive est active au début
    }
    dotsContainer.appendChild(dot);
  });
}

// Mettre à jour les bullet points pour afficher celui correspondant à la slide active
function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
}

// Écouteurs d'événements sur les flèches
prevButton.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

// Créer les dots au chargement de la page
createDots();



