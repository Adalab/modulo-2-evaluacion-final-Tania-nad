"use strict";

/* Búsqueda de la serie en el servidor
Cuando la usuaria haga click en buscar:
    Se recoge el dato del casillero
    Se construye la url
    Se hace la petición al servidor
    Por cada serie contenida en el resultado
        Pinto la serie en la página

1- Selecciono los elementos HTML (input de búsqueda,botón de buscar y sección para pintar las series seleccionadas)
2- Escucho el click del botón
3- Recojo el valor del input
4- Petición al servidor con la nueva url
5- Por cada serie contenida en el resultado de la url
    Pinto la serie en el html

*/


const inputText = document.querySelector(".js-input");
const buttonSearch = document.querySelector(".js-button");
const contentSearch = document.querySelector(".js-content");
let seriesList = [];

function handleButton(ev) {
    ev.preventDefault();
    const inputSearch = inputText.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${inputSearch}`)
        .then((response) => response.json())
        .then(info => {

            seriesList = info.data;
            for (const serie of seriesList) {
                contentSearch.innerHTML += `<div><h2>${serie.title}</h2><img class="image-1 js-images" id=${serie.id} src="${serie.images.jpg.small_image_url}" alt="Portada de la serie"></div>`;

            }
            console.log(seriesList);
            const allImages = document.querySelectorAll(".js-images");
            for (const image of allImages) {
                if (image.src.includes("https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png")) {
                    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"
                }
            }






            // function handleFavourites(event) {
            //     const idSerieClicked = event.currentTarget.value;

            // }
            // const allImages = document.querySelectorAll(".js-images");

            // for (const image of allImages) {
            //     allImages.addEventListener("click", handleFavourites);

            // }






        }






        )

}



buttonSearch.addEventListener("click", handleButton);

