<<<<<<< HEAD
let enviar=document.querySelector(".formulario");
enviar.addEventListener("submit", (e) => {

    e.preventDefault()
    async function lectura (){
        codigo= document.querySelector(".codigo").value;
        nombre=document.querySelector(".nombre").value;
        apellido=document.querySelector(".apellido").value;
        dni = document.querySelector(".dni").value;
        celular=document.querySelector(".celular").value;

        const payload = {
            dni,nombre,apellido,codigo,celular
        }


        if ((codigo==="")  (nombre==="")(apellido==="")(dni==="")(celular==="")){
            alert("Ingrese todos los datos solicitados");
        }else {
            axios.post("http://localhost:3001/",payload)
                .then(data => console.log(data))
            console.log("Realizado el envio del form")

        }
    }
    lectura()
=======


let enviar=document.querySelector(".formulario");
    

// async function lectura (){
//     codigo= document.getElementById("codigo");
//     nombre=document.getElementById("nombre");
//     apellido=document.getElementById("apellido");
//     documento = document.getElementById("documento");
//     telefono=document.getElementById("telefono");
    


//     if ((codigo==="") || (nombre==="")||(apellido==="")||(documento==="")||(telefono==="")){
//         alert("Ingrese todos los datos solicitados");
//     }else {
//         axios.post("http://localhost:3001/")   
//             .then(data => console.log(data))
//     }
// }
enviar.addEventListener("submit", (e) => {
   
    e.preventDefault()
    async function lectura (){
        codigo= document.querySelector(".codigo");
        nombre=document.querySelector(".nombre");
        apellido=document.querySelector(".apellido");
        documento = document.querySelector(".dni");
        telefono=document.querySelector(".telefono");
        console.log(codigo)
    
    
        if ((codigo.value==="") || (nombre.value==="")||(apellido.value==="")||(documento.value==="")||(telefono.value==="")){
            alert("Ingrese todos los datos solicitados");
        }else {
            axios.get("http://localhost:3001/")   
                .then(data => console.log(data))
        }
    }
    
>>>>>>> c48708560efb7ae1eb34824b7d25cd46eff3b207
    })