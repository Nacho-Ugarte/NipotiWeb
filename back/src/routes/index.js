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
                    res.json({result:"NO WIN",loser:login})
                }

                //Si no tiene un codigo exitoso
                else{
                const cargado = codigos.find((ele) => ele.codigo === codigo)
                    
                if (cargado) {
                    console.log(cargado)
                    cargado.nuevo = true
                    login.update({
                        ...login,
                        cargas:[...login.cargas,{
                            codigo:codigo,
                            resultado: "win"
                        }]
                    })
                    res.json({result:"WIN",winner:login})
                }else{
                    login.update({
                        ...login,
                        cargas:[...login.cargas,{
                            codigo:codigo,
                            resultado: "lose"
                        }]
                    })
                    res.json({result:"NO WIN", loser:login})
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
    
                if (cargado && cargado.nuevo) {
                    cargado.nuevo = true
                    const winner = await userCreated.update({
                        ...userCreated,
                        cargas:[...userCreated.cargas,{
                            codigo:codigo,
                            resultado: "win"
                        }]
                    })
                    res.json({result:"WIN",winner:winner})
                }else{
                    const loser = userCreated.update({
                        ...userCreated,
                        cargas:[...userCreated.cargas,{
                            codigo:codigo,
                            resultado: "lose"
                        }]
                    })
                    res.json({result:"NO WIN",loser:loser})
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