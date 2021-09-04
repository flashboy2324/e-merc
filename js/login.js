//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("click", function(e){

    document.getElementById("submit").addEventListener("click", function(){
        let Emailinput = document.getElementById("email");
        let Passwordinput = document.getElementById("password")

        if (Emailinput.value === "") {
            Emailinput.classList.add("incomplete");
        }
        else{
            Emailinput.classList.remove("incomplete")
        }

        if (Passwordinput.value === "") {
            Passwordinput.classList.add("incomplete");
        }
        else{
            Passwordinput.classList.remove("incomplete")
        }

        if (Emailinput.value === ""  || Passwordinput.value === ""){

            alert("Debe completar los campos");
        }
        else {
            window.location = "inicio.html";
        }
        

    })



});
