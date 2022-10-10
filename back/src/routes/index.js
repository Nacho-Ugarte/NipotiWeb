const { Router } = require("express");
const codigos = require("../json/Codes.json")
const { User } = require("../db");
const Code = require("../models/Code");

const router = Router();

router.get("/", async (req, res) => {
    const { dni, name, surname, code, telephone } = req.body
    let login = await User.findOne({
        where: { dni: dni,
            // name:name,
            // surname:surname,
            // telephone:telephone
        }
    })


    try {   
            //Si tu usuario ya entro a la pagina
            if (login) {
                //Si ya tiene un codigo exitoso
                let searchExitCode = await login.cargas.find((ele) => ele.result === "win")
                if(searchExitCode){
                    res.send("Ya ganaste un plato de pasta, no puedes ingresar otro")
                }

                //Si no tiene un codigo exitoso
                else{
                    const cargado = codigos.find((ele) => ele.codigo === code)

                if (cargado.nuevo === false) {
                    console.log(login)
                    cargado.nuevo = true
                    login.update({
                        ...login,
                        cargas:[...login.cargas,{
                            codigo:code,
                            result: "win"
                        }]
                    })
                    res.send("GANADOR")
                }else{
                    login.update({
                        ...login,
                        cargas:[...login.cargas,{
                            codigo:code,
                            result: "lose"
                        }]
                    })
                    res.send("NO GANASTE")
                    console.log(login)
                }
                }
                
            } 
            //Si tu usuario no ha entrado y es su primera vez
            else {

                const userCreated = await User.create({
                    dni:dni,
                    name:name,
                    surname:surname,
                    telephone:telephone,
                    cargas:[]
                })
                
                
                const cargado = codigos.find((ele) => ele.codigo === code)
    
                if (cargado.nuevo === false) {
                    cargado.nuevo = true
                    const modificaion = await userCreated.update({
                        ...userCreated,
                        cargas:[...userCreated.cargas,{
                            codigo:code,
                            result: "win"
                        }]
                    })
                    res.send("GANADOR")
                }else{
                    userCreated.update({
                        ...userCreated,
                        cargas:[...userCreated.cargas,{
                            codigo:code,
                            result: "lose"
                        }]
                    })
                    res.send("NO GANASTE")
                }
    
            }
        }
    catch (error) {
        console.log(error);
    }

})

router.post("/", async (req, res) => {
    // const { dni, name, surname, code, telephone } = req.body
    // console.log(req.body)
    // let login = await User.findOrCreate({
    //     dni,
    //     name,
    //     surname,
    //     telephone,
    //     where: { dni: dni },
    // })


        res.send("Conectado")




})

module.exports = router;