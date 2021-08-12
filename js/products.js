//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";




document.addEventListener("DOMContentLoaded", function cargarListado(url) {
    document.getElementById("container p-5").innerHTML = "";
    fetch(url)
        .then(response => response.json())
            .then (data=> {

                data.forEach(element => {
                    let ul = "";
                    ul = ` 
                         <ul>
                         <li> ` + element.name + ` </li>
                         <li> ` + element.description + ` </li>
                         <li> ` + element.cost + ` </li>
                         <li> ` + postear(element.imgSrc) + ` </li>
                         <ul>
                         `

                document.getElementById("container p-5").innerHTML += "ul";    
                    
                });

            })
            .catch(error => alert("Hubo un error: " + error));

});

function postear(element.imgSrc){
    return ( ` <img src= (element.imgSrc)>`)
}