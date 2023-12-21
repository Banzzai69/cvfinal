


function toggleProfileInfo() {
  var nomElement = document.getElementById("nom");
  var careerElement = document.getElementById("career");
  var photoElement = document.getElementById("photo");
  var aboutElement = document.querySelector(".about");

  if (nomElement.innerHTML === "Donato Florian") {
    nomElement.innerHTML = "Fais pas l'étonné";
    careerElement.innerHTML = "Père noël par intérim"; // Change le métier
    photoElement.src = "images/Jonathan_G_Meath_portrays_Santa_Claus.jpg";
    aboutElement.innerHTML = "Père noël en reconversion profesionnel, après l'abandon de la mère neël au profit du grinch";   // Change l'image de profil
  } else {
    nomElement.innerHTML = "Donato Florian";
    careerElement.innerHTML = "Administrateur Réseau"; // Remet le métier d'origine
    photoElement.src = "images/photo.png";  // Remet l'image d'origine
    aboutElement.innerHTML = "Passionné d'informatique âgé de 42 ans, en reconversion professionnelle et actuellement en formation dans le domaine de l'informatique. Fort d'une expérience professionnelle antérieure dans la sécurité privée, je me lance aujourd'hui avec enthousiasme dans une nouvelle aventure professionnelle axée sur ma véritable passion : les technologies de l'information";
  }
}

function toggleElement(elementId) {
  var element = document.getElementById(elementId);

  // If currently hidden, show it; otherwise, hide it
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}
