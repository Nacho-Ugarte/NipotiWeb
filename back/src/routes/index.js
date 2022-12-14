const { Router } = require("express");
const codigos = require("../json/Codes.json")
const { User } = require("../db");


const router = Router();

router.post("/", async (req, res) => {
    const { dni, nombre, apellido, codigo, celular } = req.body
    let login = await User.findOne({
        where: { dni: dni,
            // nombre:nombre,
            // apellido:apellido,
            // celular:celular
        }
    })


    try {   
            //Si tu usuario ya entro a la pagina
            if (login) {
                //Si ya tiene un codigo exitoso
                let searchExitCode = await login.cargas.find((ele) => ele.resultado === "win")
                if(searchExitCode){
                    res.send("NO WIN")
                }

                //Si no tiene un codigo exitoso
                else{
                const cargado = codigos.find((ele) => ele.codigo === codigo)
                    
                if (cargado && cargado.premio === true) {
                    console.log(cargado)
                    cargado.premio = false
                    login.update({
                        ...login,
                        cargas:[...login.cargas,{
                            codigo:codigo,
                            resultado: "win"
                        }]
                    })
                    res.send("WIN")
                }else{
                    login.update({
                        ...login,
                        cargas:[...login.cargas,{
                            codigo:codigo,
                            resultado: "lose"
                        }]
                    })
                    res.send("NO WIN")
                    console.log(login)
                }
                }
                
            } 
            //Si tu usuario no ha entrado y es su primera vez
            else {

                const userCreated = await User.create({
                    dni:dni,
                    nombre:nombre,
                    apellido:apellido,
                    celular:celular,
                    cargas:[]
                })
                
                
                const cargado = codigos.find((ele) => ele.codigo === codigo)
    
                if (cargado && cargado.premio === true) {
                    cargado.premio = false
                    const modificaion = await userCreated.update({
                        ...userCreated,
                        cargas:[...userCreated.cargas,{
                            codigo:codigo,
                            resultado: "win"
                        }]
                    })
                    res.send("WIN")
                }else{
                    userCreated.update({
                        ...userCreated,
                        cargas:[...userCreated.cargas,{
                            codigo:codigo,
                            resultado: "lose"
                        }]
                    })
                    res.send("NO WIN")
                }
    
            }
        }
    catch (error) {
        console.log(error);
    }

})

// router.post("/", async (req, res) => {
//     const { dni, nombre, apellido, code, celular } = req.body
//     console.log(req.body)
//     let login = await User.findOrCreate({
//         dni,
//         nombre,
//         apellido,
//         celular,
//         where: { dni: dni },
//     })


//         res.send("Conectado")




// })

module.exports = router;