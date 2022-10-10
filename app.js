let enviar=document.getElementById("boton");
const platoPasta= [
{codigo:"FY8E5",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"FZ37V",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"G26ZU",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"G2Q7C",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"G4PL5",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"G6NVR",nombre:"",apellido:"",documento:"",telefono:"",nuevo:false},//Probar este para otra página
{codigo:"GBUSP",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GER3Q",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GGEEP",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GGKSS",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GKYDF",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GQR9X",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GX5QM",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"GYJ2C",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"H88GQ",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HBLDN",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HE56K",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HEYC2",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HF9HW",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HJR7E",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HMJ88",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HQGNY",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HR7MM",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HRJDD",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HTKGE",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HVK7H",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"HWUNB",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"JBUJ2",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"JCW2Y",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true},
{codigo:"JH5YW",nombre:"",apellido:"",documento:"",telefono:"",nuevo:true}
];


function lectura (){
    codigo= document.getElementById("codigo").value;
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    documento = document.getElementById("documento").value;
    telefono=document.getElementById("telefono").value;
    ;


    if ((codigo=="") || (nombre=="")||(apellido=="")||(documento=="")||(telefono=="")){
        alert("Ingrese todos los datos solicitados");
    }else {
        const prueba= platoPasta.find(item => item.codigo === codigo);
        console.log(prueba.nuevo);
        (prueba.nuevo == true  && prueba.documento==="" )?
        
            
                (prueba.nombre=nombre,
                //alert(`Felicitaciones ${platoPasta.nombre} te ganaste un plato de pasta`),
                prueba.nuevo=false,
                prueba.documento=documento,
                prueba.nombre=nombre,
                prueba.telefono=telefono,
                window.location.href="./ganador.html",
                nombreganador=document.getElementById("nombreganador"),
                div =document.createElement("div"),
                div.innerHTML=`<h4>${prueba.nombre} ${prueba.apellido} AAAAAAAAA</h4>`,
                nombreganador.append(div),
                console.log(platoPasta))
                
        
        :window.location.href="./perdedor.html";
    }

}
enviar.addEventListener("click", (e) => {
    e.preventDefault();
    lectura();
    })