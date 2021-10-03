//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product = {};
var comments = [];

function showComments(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];

        if (comment.score === 1){

        htmlContentToAppend += `

        
          <p><strong>`+ comment.user +`</strong></p>
       
          <p>` + comment.description + `</p> 
       
          <span id="1" class="fa fa-star checked"></span>
          <span id="2" class="fa fa-star "></span>
          <span id="3" class="fa fa-star "></span>
          <span id="4" class="fa fa-star"></span>
          <span id="5" class="fa fa-star"></span> <br> <br>

        `
        }

        if (comment.score === 2){

            htmlContentToAppend += `
    
            
              <p><strong>`+ comment.user +`</strong></p>
           
              <p>` + comment.description + `</p> 
           
              <span id="1" class="fa fa-star checked"></span>
              <span id="2" class="fa fa-star checked"></span>
              <span id="3" class="fa fa-star "></span>
              <span id="4" class="fa fa-star"></span>
              <span id="5" class="fa fa-star"></span> <br> <br>
    
            `
            }

            if (comment.score === 3){

                htmlContentToAppend += `
        
                
                  <p><strong>`+ comment.user +`</strong></p>
               
                  <p>` + comment.description + `</p> 
               
                  <span id="1" class="fa fa-star checked"></span>
                  <span id="2" class="fa fa-star checked"></span>
                  <span id="3" class="fa fa-star checked"></span>
                  <span id="4" class="fa fa-star"></span>
                  <span id="5" class="fa fa-star"></span> <br> <br>
        
                `
                }

                if (comment.score === 4){

                    htmlContentToAppend += `
            
                    
                      <p><strong>`+ comment.user +`</strong></p>
                   
                      <p>` + comment.description + `</p> 
                   
                      <span id="1" class="fa fa-star checked"></span>
                      <span id="2" class="fa fa-star checked"></span>
                      <span id="3" class="fa fa-star checked"></span>
                      <span id="4" class="fa fa-star checked"></span>
                      <span id="5" class="fa fa-star"></span> <br> <br>
            
                    `
                    }

                    if (comment.score === 5){

                        htmlContentToAppend += `
                
                        
                          <p><strong>`+ comment.user +`</strong></p>
                       
                          <p>` + comment.description + `</p> 
                       
                          <span id="1" class="fa fa-star checked"></span>
                          <span id="2" class="fa fa-star checked"></span>
                          <span id="3" class="fa fa-star checked"></span>
                          <span id="4" class="fa fa-star checked"></span>
                          <span id="5" class="fa fa-star checked"></span> <br> <br>
                
                        `
                        }
                
            
        
    


    } 
    
    

    htmlContentToAppend += `
    <br>

    <div class="star-rating">
      <input id="star-5" type="radio" name="rating" value="5"  />
      <label for="star-5" title="5 stars">
        <i class="active fa fa-star"></i>
      </label>

      <input id="star-4" type="radio" name="rating" value="4"/>
      <label for="star-4" title="4 stars">
        <i class="active fa fa-star"></i>
      </label>

      <input id="star-3" type="radio" name="rating" value="3"/>
      <label for="star-3" title="3 stars">
        <i class="active fa fa-star"></i>
      </label>

      <input id="star-2" type="radio" name="rating" value="2" />
      <label for="star-2" title="2 stars">
        <i class="active fa fa-star"></i>
      </label>

      <input id="star-1" type="radio" name="rating" value="1" checked/>
      <label for="star-1" title="1 star">
        <i class="active fa fa-star"></i>
      </label> <br>
    <textarea id="comentario" name="comentario"></textarea> <br>.
    <input type="submit" value="Send">
    `
document.getElementById("comentarios").innerHTML = htmlContentToAppend;



}


function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
function tomarName(id){
  localStorage.setItem('info', JSON.stringify({productId : id}));
  
}

function funcionPepe(product){
  
  let htmlContentToAppend = "";
  htmlContentToAppend += `
            <a href="product-info.html" onclick= "tomarName(`+ product.id +`)" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-1">
                        <img src="` + product.images[0] + `" class="img-thumbnail">
                    </div><br>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </a>
            `
            

        document.getElementById("alfonso").innerHTML += htmlContentToAppend;
    

}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {   resultObj.data.forEach(element => {
              if (element.id == JSON.parse(localStorage.getItem('info')).productId){
                            product = element;



                            let productNameHTML  = document.getElementById("productName");
                            let productDescriptionHTML = document.getElementById("productDescription");
                            let productCountHTML = document.getElementById("soldCount");
                            let productCostHTML = document.getElementById("productCost");
                            let productCategoryHTML = document.getElementById("productCategory");
        
                            productNameHTML.innerHTML = product.name;
                            productDescriptionHTML.innerHTML = product.description;
                            productCountHTML.innerHTML = product.soldCount;
                            productCostHTML.innerHTML = product.currency + product.cost;
                            productCategoryHTML.innerHTML = product.category;

                            //Muestro las imagenes en forma de galería
                            showImagesGallery(product.images);
                            product.relatedProducts.forEach(pepe => {
                              funcionPepe(resultObj.data[pepe])
                              
                            });
              }
            });

        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            comments = resultObj.data;

            showComments(comments)
        }

    });


});

