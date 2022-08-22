let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("contrasena");
let verificacion = document.getElementById("verificar");
let textoVerificacion = document.getElementById("verificacion");
let correo = document.getElementById("correo");
let dni = document.getElementById("dni");
let prenda = document.getElementById("prenda");
let color = document.getElementById("prendaColor");
let comprar = document.getElementById("comprar");
let tallas = document.getElementById("tallaS")
let tallam = document.getElementById("tallaM")
let tallal = document.getElementById("tallaL")
let tallaxl = document.getElementById("tallaXl")
let formulario = document.getElementById("form");



verificacion.onclick = eventoClic;



function eventoClic() {
    if (nombre.value != "user1" || contraseña.value != "abc123") {

        textoVerificacion.innerHTML = "<H3>Datos incorrectos intentelo nuevamente</H3>"
        //console.log(nombre.value)
    } else {
        textoVerificacion.innerHTML = "Correcto"


        function tipoPrenda(){
            let datos= prenda.value;
            document.getElementById("prenda2").innerHTML = "selecciono: " + datos
        }
        
        function colorPrenda(){
            let colorp= color.value;
            document.getElementById("prenda3").innerHTML = "selecciono: " + colorp
        }
        
        prenda.onchange = tipoPrenda 
        color.onchange = colorPrenda
        
        formulario.addEventListener("submit",datosFormulario)
        
        function datosFormulario(e){
            e.preventDefault();
            let datosf = e.target;
            console.log("usuario: " +datosf.children[2].value)
            console.log("contraseña: "+datosf.children[3].value)
            console.log("correo: "+datosf.children[9].value)
            console.log("telefono: "+datosf.children[10].value)
            console.log("prenda: "+datosf.children[13].value)
            console.log("color: " +datosf.children[21].value)
            if(tallas.checked){
                console.log("talla: S") 
            }
            if(tallal.checked){
                console.log("talla: L") 
            }
            if(tallam.checked){
                console.log("talla: M") 
            }
            if(tallaxl.checked){
                console.log("talla: XL") 
            }

        }

    }

}

