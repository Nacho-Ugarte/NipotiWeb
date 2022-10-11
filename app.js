function saveLocalStorage(name){
    localStorage.setItem("nombre",name)
    
};

function getLocalStorage(){
    let nombre = localStorage.getItem("nombre")
    console.log(nombre)
}


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
            dni,
            nombre: nombre.split(' ').join(''),
            apellido: apellido.split(' ').join(''),
            codigo: codigo.split(' ').join(''),
            celular: celular.split(' ').join('')
        }
    
    
        if ((codigo.split(' ').join('').length!==5) || (nombre==="")||(apellido==="")||(dni==="")||(celular==="")){
            alert("Alguno de los datos solicitados es incorrecto");
        }else {
            axios.post("http://localhost:3001/",payload)   
                .then(res => {
                    saveLocalStorage(`${res.data.nombre}`)
                    console.log(res.data)
                    if(res.data === "NO WIN"){
                        // window.location.href = "file:///C:/Users/Maxi/Contacts/Desktop/NipotiWeb/perdedor.html"
                    } else{
                        // window.location.href = "file:///C:/Users/Maxi/Contacts/Desktop/NipotiWeb/ganador.html"
                        getLocalStorage()
                    }
                })
            console.log("Realizado el envio del form")
           
        }
    }
    lectura()
    })