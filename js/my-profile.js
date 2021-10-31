//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function guardarData() {

    
    let nombre = document.getElementById("nameandsurname").value 

    let edad = document.getElementById("edad").value

    let email = document.getElementById("email").value

    let contacto = document.getElementById("contacto").value

    let datos_json = {objeto1:nombre, objeto2:edad, objeto3:email, objeto4:contacto}

    localStorage.setItem("datos",JSON.stringify(datos_json));

    
  }
  
  
  document.addEventListener("DOMContentLoaded", function recuperarData() {
  
    
    if (localStorage.getItem("datos")) {
  
        
        datos_json = localStorage.getItem("datos");
  
        
        datos = JSON.parse(datos_json);
  
        
        document.getElementById("nameandsurname").value = datos.objeto1;

        document.getElementById("edad").value = datos.objeto2;

        document.getElementById("email").value = datos.objeto3;

        document.getElementById("contacto").value = datos.objeto4;
      
            
            
  
    } 
    
    else{
        document.getElementsByClassName("datos").value = "No hay datos almacenados";
    }
  
  });