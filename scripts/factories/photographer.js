function photographerFactory(data) {
    const { name, city, country, tagline, price, id, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
    

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture, "alt")
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const link = document.createElement( 'a' );
        link.setAttribute('href', 'photographer.html')
        link.appendChild(img);
        link.appendChild(h2);
        const h3 = document.createElement( 'h3');
        h3.textContent = city + ", " + country;
        const p = document.createElement( "p" );
        p.textContent = tagline;
        const pricep = document.createElement( "small");
        pricep.textContent = price + "€/jour";
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(pricep);
        

        return (article);
    }
    return { name, city, country, tagline, price, id, picture, getUserCardDOM }
}



