

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
    
    })