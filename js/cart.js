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
        <p>Cantidad: </p>
        <div>
        <input style="width: 60px;" type="number" id="cantidad${i}" class="form-control out" value="${ashe.count}" min="1" max="2" onchange="calcSubtotal(${ashe.unitCost}, ${i})">
        <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      </div>
      <div class="col-4 align-self-end">
        <h4 class="text-right"></h4>
        <h3 class="text-right subtotal" id="subtotal${i}">${sub}</h3>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-3">
      <div>
      <label for="calle">Calle</label><br>
      <input type="email" class="form-control out" placeholder="" id="calle" name="calle" required><br>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      <label for="numero">Numero</label><br>
      <div>
      <input type="email" class="form-control out" placeholder="" id="numero" name="numero" required><br>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      </div>
      <div class="col-3"> 
      <div>
      <label for="esquina">Esquina</label><br>
      <input type="email" class="form-control out" placeholder="" id="esquina" name="esquina" required><br>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      <div>
      <label for="pais">Pais</label><br>
      <input type="email" class="form-control out" placeholder="" id="pais" name="pais" required><br>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      </div>
      <div class="col-6">
      <h5>Tipo de Envio</h5>
      <div>
      <input type="radio" onclick="calcEnvio(15)" class="radio out" name="envio" id="premium" value="premium" required>
      <label for="premium">Premium (2-5 días) - Costo del 15% sobre el subtotal</label><br>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      <div>
      <input type="radio" onclick="calcEnvio(7)" class="radio out" name="envio" id="express" value="express" required>
      <label for="express">Express (5-8 días) - Costo del 7% sobre el subtotal.</label><br>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      <div>
      <input type="radio" onclick="calcEnvio(5)" class="radio out" name="envio" id="standart" value="standart" required>
      <label for="standart">Standard (12 a 15 días) - Costo del 5% sobre el subtotal</label>
      <div class="valid-feedback">
        anashe
      </div>
      <div class="invalid-feedback">
        anashen't
      </div>
      </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col">
      
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Metodo de Pago
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Seleccione su metodo de pago</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form class="needs-validation" id="formulario" novalidate>
          <div class="modal-body">
          <input type="radio" onclick="changeWasValidated('credito')" name="pago" id="tarjeta" value="tarjeta">
          <label for="tarjeta">Tarjeta de credito</label><br>
          <div id="credito">
          <input type="email" class="form-control in" placeholder="Numero de tarjeta" id="creditos" name="tarjeta" value="" required><br>
          <div class="valid-feedback">
          anashe
          </div>
          <div class="invalid-feedback">
          anashen't
          </div>
          </div>
          <input type="radio" onclick="changeWasValidated('transferencia')" name="pago" id="bancaria" value="bancaria">
          <label for="bancaria">Transferecia bancaria</label><br>
          <div id="transferencia">
          <input type="email" class="form-control in" placeholder="Numero de cuenta" id="transferencias" name="bancaria" required><br>
          <div class="valid-feedback">
          anashe
          </div>
          <div class="invalid-feedback">
          anashen't
          </div>
          </div>
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-2">
      <div class="col">
        <h4>Coste del Envio</h4>
      </div>
      <div class="col-3">
        <h4 class="text-right" id="envio"></h4>
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
  let envios = document.getElementById("envio");
  for (let i = 0; i < subs.length; i++) {
    total += parseInt(subs[i].innerHTML);
    total += parseInt(envios.innerHTML);
  }
  document.getElementById("total").innerHTML = total;
  console.log('calcTotal');
}

function calcSubtotal(precio, i) {
      let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);
      subtotal = Math.abs(cantidad * precio)
      document.getElementById(`subtotal${i}`).innerHTML = subtotal;
      calcTotal();
      console.log('calcSubtotal');
}

function calcEnvio(num){

  let subtotales = parseInt(document.getElementById(`subtotal${0}`).innerHTML);
  
  
  let coste = Math.abs((subtotales*num)/100)
  

  document.getElementById("envio").innerHTML = coste;

  calcTotal();
  console.log('calcEnvio');

}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok") {
            articulos = resultObj.data.articles;
            showArticles(articulos)
        }
    });
    

});

function changeWasValidated(id){
  console.log('id: ' + id);
  let credito = document.getElementById("credito");
  let transferencia =  document.getElementById("transferencia");
  console.log('start credito: ' + credito);
  console.log('start transferencia: ' + transferencia);
  if (id  === "credito"){
   if (credito.value !="" ){
      // transferencia.classList.add("was-validated");
      credito.classList.add("was-validated");
   }
  }
  if (id === "transferencia"){
    if (transferencia.value !=""){
        transferencia.classList.add("was-validated");
        // credito.classList.add("was-validated");
    }
  }
  console.log('end credito: ' + credito);
  console.log('end transferencia: ' + transferencia);
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        // form.classList.add('was-validated');
        console.log('done')
      }, false);
    });
  }, false);
  console.log('validation');
})();





  






