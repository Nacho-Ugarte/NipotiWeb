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
    })