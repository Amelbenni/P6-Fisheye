async function init() 
{
    // Récupère les datas des photographes
    const id = new URLSearchParams(document.location.search).get('id');
    const photographer = await getPhotographer(id);
    displayData(photographer);
    
};

async function getPhotographer(id)
{
    const response = await fetch('./data/photographers.json');
    const data = await response.json();

    return filterById(data.photographers, id);
}
    
function filterById(photographers, id) 
{
    return photographers.filter((photographer) => photographer.id == id)[0];
}

async function displayData(photographer) 
{
    const { name, city, country, tagline, price, id, portrait } = photographer;
    const picture = `assets/photographers/${portrait}`;
    const photographersSection = document.querySelector(".photograph-header");

    const h1 = document.createElement('h1');
    h1.textContent = name;
    photographersSection.appendChild(h1);

    const cityText = document.createElement('p');
    cityText.textContent = city + ", " + country;
    photographersSection.appendChild(cityText);
    
    const tagLineText = document.createElement('small');
    tagLineText.textContent = tagline;
    photographersSection.appendChild(tagLineText);

    const photographPortrait = document.createElement('img');
    photographPortrait.setAttribute("src", picture)
    photographPortrait.setAttribute("alt", name)
    photographersSection.appendChild(photographPortrait);
};

init();

        
