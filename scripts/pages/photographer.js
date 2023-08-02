//Mettre le code JavaScript lié à la page photographer.html
const id = new URLSearchParams(document.location.search).get('id');
console.log(id)

async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch('./data/photographers.json');
    const photographers = await response.json();
   

    
    // et bien retourner le tableau photographers seulement une fois récupéré
    return (photographers)
    }



async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

