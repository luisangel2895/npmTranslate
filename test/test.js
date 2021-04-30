// aqui escribiremos el codigo para los tests con chai, mocha no corre codigo ES2015
// y es un servidor digamos node.js por lo q tenemos q escribir los test con chai para 
// un entorno de node.js

const expect = require('chai').expect
const npmtest = require('..').default //.. se refiere a un modulo q esta en un nivel mas arriba es decir el modulo q estamos
                            // creando npmtest y entrara al package.json e ira al main donde traera npmtestDist.js

describe('Testeando el paquete npmtest', function(){ // describe es una funcion de mocha donde encerramos todos los test q queremos hacer
                        // respecto a un archivo en este caso nuesto npmtestDist pero q lo aguardamos anteriormente 
                        // con el nombre de npmtest

    // ahora hacemos los test unitarios con chai esto con la funcion it donde como primer parametro describimos al test
    // y como segundo una funcion donde testearearemos un caso unitario, en este casolas descripciones seran nuestras reglas
    // es importante ser descriptivo para q si el test falla podamos saber en donde fallo

    it('Si la palabra termina con ar se le quitan esas 2 letras', function(){ 
        const translation = npmtest("Programar")
        expect(translation).to.equal("Program")
    })

    it('Si la palabra inicia con z se le anade pe al final zorro', function(){ 
        const translation = npmtest("Zorro")
        const translation2 = npmtest("Zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })

    it('Si la palagra traducita tienen 10 o mas letras se debe partir en 2 por la mitad y unir con un guion en medio', function(){ 
        const translation = npmtest("abecedario")
        expect(translation).to.equal("abece-dario")
    })

    it('Si la palabra original eds un palindromo no le aplicamos ninguna regla y solamente la imprimimos igual pero intercalando mayusculas y minusculas', function(){ 
        const translation = npmtest("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })

})