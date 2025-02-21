document.getElementById("bouton1").addEventListener("click", function () {
  console.log("Le bouton a été cliqué !");


  
  
  document.querySelectorAll(".effacer").forEach((div) => {
    div.style.visibility = "hidden";
  });

  
  document.querySelector(".fond").style.backgroundImage =
    "url('images/fondfinal.jpg')";
  document.querySelector(".fond").style.backgroundSize = "cover";

  
  document.getElementById("bouton1").style.visibility = "hidden";
  document.getElementById("bouton3").style.visibility = "visible";

  
  const ancienneImage = document.getElementById("imageSoulofcinder");
  if (ancienneImage) {
    ancienneImage.remove(); 
  }


  const nouvelleImage = document.createElement("img");
  nouvelleImage.src = "soulofcinder3.webp";
  nouvelleImage.id = "imageSoulofcinder";
  nouvelleImage.alt = "Une image supplémentaire";
  nouvelleImage.style.position = "absolute";
  nouvelleImage.style.top = "46%";
  nouvelleImage.style.left = "35%";
  nouvelleImage.style.width = "29vh";
  nouvelleImage.style.height = "24vw";
  nouvelleImage.style.display = "block";

  
  document.querySelector(".fond").appendChild(nouvelleImage);

  if (window.innerWidth <= 360) {
    nouvelleImage.remove();
  }


  nouvelleImage.addEventListener("click", function () {
    const bossFinal = {
      nom: "Soul of Cinder",
      localisation: "Kiln of the First Flame",
      faiblesses: ["Foudre", "Magie"],
      resistances: ["Feu"],
      immunites: ["Poison", "Toxique"],
      parade_possible: "oui",
      pnj_invoquables: ["Yuria of Londor"],
      "Boss obligatoire": "oui",
      images: ["soulofcinder1.jpg", "soulofcinder2.jpg", "soulofcinder3.webp"], 
    };

    afficherInformations(bossFinal);

   
    
  });
});

document.getElementById("bouton3").addEventListener("click", function () {
  console.log("Le bouton a été cliqué !");

  if (window.innerWidth > 1280) {
    
    document.querySelectorAll(".effacer").forEach((div) => {
      div.style.visibility = "visible";
    });
  }

  
  document.querySelector(".fond").style.backgroundImage = "url('images/mapdk.png')";
  document.querySelector(".fond").style.backgroundSize = "cover";

  bosses.forEach((icon) => {
    icon.style.transform = "translate(0vw, -3vh)"; 
  });


  document.getElementById("bouton1").style.visibility = "visible";
  document.getElementById("bouton3").style.visibility = "hidden";


  
  const imageSoulofcinder = document.getElementById("imageSoulofcinder");
  if (imageSoulofcinder) {
    imageSoulofcinder.remove(); 
  }
});



const map = document.querySelector(".fond");
const bosses = document.querySelectorAll(".boss");


bosses.forEach((boss) => {
  boss.addEventListener("click", function () {
    console.log("Un boss a été cliqué !");

    
    document.querySelector(".modale").style.visibility = "visible";
    document.getElementById("bouton2").style.visibility = "visible";
    document.querySelector(".modale").style.opacity = "1";

    
    map.style.backgroundPosition = "13vw center";

    
    bosses.forEach((icon) => {
      icon.style.transform = "translate(13vw, -3vh)"; 
    });
  });
});


document.getElementById("bouton2").addEventListener("click", function () {
  document.querySelector(".modale").style.visibility = "hidden";
  document.getElementById("bouton2").style.visibility = "hidden";
  document.querySelector(".modale").style.opacity = "0";

  
  map.style.backgroundPosition = " center";


  bosses.forEach((icon) => {
    icon.style.transform = "translateY(-3vh)";
  });
});


function afficherInformations(bossData) {
  const modale = document.querySelector(".modale");
  modale.innerHTML = `
    <p class="txtboss"><strong>Boss obligatoire:</strong> ${
      bossData["Boss obligatoire"]
    }</p>
    <p class="txtboss"><strong>Pnj invoquables:</strong> ${bossData.pnj_invoquables.join(
      ", "
    )}</p>
    <p class="txtboss"><strong>Parade possible:</strong> ${
      bossData.parade_possible
    }</p>
    <p class="txtboss"><strong>Immunités:</strong> ${bossData.immunites.join(
      ", "
    )}</p>
    <p class="txtboss"><strong>Résistances:</strong> ${bossData.resistances.join(
      ", "
    )}</p>
    <p class="txtboss"><strong>Faiblesses:</strong> ${bossData.faiblesses.join(
      ", "
    )}</p>
    <p class="txtboss"><strong>Localisation:</strong> ${
      bossData.localisation
    }</p>
    <h2 class="titreboss">${bossData.nom}</h2>

        <div class="carousel-container">
            <button id="prevBtn">◀</button>
            <div class="carousel" id="carousel"></div>
            <button id="nextBtn">▶</button>
        </div>
        
    `;

  
  const carousel = document.getElementById("carousel");
  bossData.images.forEach((imgSrc, index) => {
    let img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("carousel-image");
    if (index === 0) img.classList.add("active"); 
    carousel.appendChild(img);
  });

  
  modale.style.visibility = "visible";
  modale.style.opacity = "1";

  
  setupCarousel();
}


function setupCarousel() {
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-image");

  if (images.length > 0) {
    images[0].classList.add("active");
  }

  document.getElementById("nextBtn").addEventListener("click", function () {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add("active");
  });
}

const bouton = document.getElementById("bouton1");
const modale = document.querySelector(".modale");


bouton.addEventListener("click", function () {
  
  modale.style.visibility = "hidden";
  document.getElementById("bouton2").style.visibility = "hidden";
  map.style.backgroundPosition = " center";
});




document.getElementById("bouton1").addEventListener("click", function () {
  
  const bossData = {
    "Boss obligatoire": "oui",
   "pnj_invoquables": ["Yuria de Londor, Londor Pâle Shade "],
    parade_possible: "oui",
    immunites: [],
    resistances: ["Feu"],
    faiblesses: ["Foudre"],
    localisation: "Kiln de la Première Flamme",
    nom: "L'Âme des Cendres",
    images: ["images/cendre1.webp", "images/cendre2.jpg", "images/cendre3.jpg"],
  };

  afficherInformations(bossData); 
});



document.getElementById("bouton3").addEventListener("click", function () {
  const modale = document.querySelector(".modale");
  modale.style.visibility = "hidden"; 
  modale.style.opacity = "0"; 
});




document.querySelectorAll('.menu-content a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();  

        
        const bossIndex = event.target.getAttribute('data-boss');

        
        const bossIcon = document.querySelector(`.boss.icon[data-boss="${bossIndex}"]`);
        
        if (bossIcon) {
            bossIcon.click();
        }
    });
});


document.getElementById("bouton4").addEventListener("click", function () {
    const fond = document.querySelector(".fond");
    const feu = document.querySelector(".feu");
    const menuButton = document.querySelector(".menu-button");
    const menuContent = document.querySelector(".menu-content");
    
    
    if (fond.style.visibility === "hidden" || !fond.style.visibility) {
        fond.style.visibility = "visible";
        feu.style.display = "none";
        bouton4.style.visibility = "hidden";
    } else {
        fond.style.visibility = "hidden";
        feu.style.visibility = "visible";
    }

    
    menuButton.style.visibility = "visible"; 
    menuContent.style.visibility = "visible";
});


const fond = document.querySelector(".fond");

let isDragging = false;
let startX, startY;
let bgPosX = 50; // Position initiale en %
let bgPosY = 50;
const slowFactor = 3; // 🔹 Change ce chiffre pour ajuster la vitesse (2 = 2x plus lent)

function isMobile() {
    return window.innerWidth <= 360;
}

if (isMobile()) {
    fond.addEventListener("touchstart", startDrag, { passive: false });
}

function startDrag(e) {
    if (!isMobile()) return;

    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    document.addEventListener("touchmove", drag, { passive: false });
    document.addEventListener("touchend", stopDrag);
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();

    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;

    let moveX = ((x - startX) / window.innerWidth * 100) / slowFactor; // 🔹 Moins rapide
    let moveY = ((y - startY) / window.innerHeight * 100) / slowFactor; // 🔹 Moins rapide

    bgPosX -= moveX;
    bgPosY -= moveY;

    bgPosX = Math.max(0, Math.min(100, bgPosX));
    bgPosY = Math.max(0, Math.min(100, bgPosY));

    fond.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;

    startX = x;
    startY = y;
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", stopDrag);
}




fetch("http://localhost:4000/api/boss") // Mets l'URL de ton serveur
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return response.json();
  })
  .then((data) => {
    const icones = document.querySelectorAll(".icon");
    icones.forEach((icon) => {
      icon.addEventListener("click", function () {
        const bossId = icon.getAttribute("data-boss");
        const bossData = data[bossId];
        if (bossData) {
          afficherInformations(bossData);
        } else {
          console.error("Boss non trouvé :", bossId);
        }
      });
    });
  })
  .catch((error) => {
    console.error("Erreur:", error);

    
  });
