//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var articulos = undefined;

function showArticles(array){

    let htmlContentToAppend = "";
    document.getElementById("cart").innerHTML = "";
    for(let i = 0; i < array.length; i++){
        const ashe = array[i];

        let sub = Math.abs(ashe.count * ashe.unitCost);
        

            htmlContentToAppend += `
  <div class="container celeste">
    <div class="row p-2">
      <div class="col-2">
        <div class="dropdown">
          <button class="btn btn-outline-info dropdown-toggle d-md-none d-lg-none d-xl-none d-block" style="padding: 0px;" type="button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="img/lines.png" alt="" style="width: 50%; ">
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="inicio.html">Inicio</a>
            <a class="dropdown-item" href="categories.html">Categorías</a>
            <a class="dropdown-item" href="products.html">Productos</a>
            <a class="dropdown-item" href="sell.html">Vender</a>
            <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
            <a class="dropdown-item" href="index.html">Cerrar Sesion</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-4 " style="padding: 15px;">
        <img class="d-none d-md-block" src="img/carrito.png" alt="" style="width: 50%;">
      </div>
      <div class="col-4 pt-md-4">
        <h1 class="text-center"> Mi Carrito</h1>
      </div>
      <div class="col-4">
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-4">
        <img src="${ashe.src}" alt="">
      </div>
      <div class="col-4">
        <h4>${ashe.name}</h4>
        <p>Envio: Gratis</p>
        <input style="width: 60px;" type="number" id="cantidad${i}" value="${ashe.count}" min="1" max="2" onchange="calcSubtotal(${ashe.unitCost}, ${i})">
      </div>
      <div class="col-4 align-self-end">
        <h4 class="text-right"></h4>
        <h3 class="text-right subtotal" id="subtotal${i}">${sub}</h3>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-3">
        <button type="button" class="btn btn-outline-info">Eliminar</button>
      </div>
      <div class="col"> 
        <button type="button" class="btn btn-outline-info">Mas productos</button>
      </div>
      <div class="col-2">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="float: right; padding: 0px;">
            <img src="img/dots.png" alt="" style="width: 50%; ">
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Comprar ahora</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-2">
      <div class="col">
        <h4>Envio a xlugar</h4>
      </div>
      <div class="col-3">
        <h4 class="text-right">Gratis</h4>
      </div>
    </div>
    <hr>
    <div class="row my-2">
      <div class="col">
        <h2>Total</h2>
      </div>
      <div class="col">
        <h2 class="text-right" id="total">${ashe.currency} </h2>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-12" style="padding: 0%;">
        <button type="button" class="btn btn-primary" style="float: left;">Continuar Compra</button>
      </div>
    </div>
  </div>
            `
            

        document.getElementById("cart").innerHTML = htmlContentToAppend;
    }

    calcTotal();
}

function calcTotal(){
  let total = 0;
  let subs = document.getElementsByClassName("subtotal");
  for (let i = 0; i < subs.length; i++) {
    total += parseInt(subs[i].innerHTML);
    
  }
  document.getElementById("total").innerHTML = total;
}

function calcSubtotal(precio, i) {
      let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);
      subtotal = Math.abs(cantidad * precio)
      document.getElementById(`subtotal${i}`).innerHTML = subtotal;
      calcTotal();
}







document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok") {

            articulos = resultObj.data.articles;
            
            showArticles(articulos)
            
            

        }
    });
    

});