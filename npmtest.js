
// nuestro modulo solo tiene una funcion pero podria tener varias donde 1 es la funcion principal o q 
// llama a las otras, pero tambien puede darse el caso q nuestro modulo tenga varias funcioens principales
// para diferentes funcioens de nuestra libreria

// en php cuando queremos incluir un archivo dentro de otro simplemente hacemos include y se incluye todo el archivo,
// pero en js en el archivo q queremos usar en otros debemos indicarle q funciones permitimos q se usen 
// esto mediante la palabra export q la usaremos generalmente con las funciones principales del archivo, las otra
// funciones sin esta palabra no podran ser usadas

// ahora podemos agregar cual de las funciones principales se exportara por defecto con export default
// en el archivo donde importaremos esta funcion usaremos la sintaxis :
//      import npmtest from 'npmtest' -> en esta sintaxis indicamos q importaremos la funcion nptest del modulo npmtest
//                                      al indicarla de manera directa la funcion se supone q es al funcion q se exporta por default
//                                      del modulo npmtest y para indicar el modulo usamos from ( con from js buscara el nombre de esta carpeta
//                                      con este nombre dentro de node_modules), en este caso este es un modulo externo
//                                     donde el nombre del modulo es npmtest y q cuando se importe tendra ese nombre de carpeta
//                                      en node_modules

// ahora si en el archivo tenemos varias funciones principales, una de ellas sera exportada por defecto, pero si queremos
// usar alguna de las otras principales, en el archivo debemos de hacerlo con la sintaxis {} con el nombre de la funcion:
//      import { funcion2 } from 'npmtest'


// en este caso solamente tenemos una funcion principal llamada npmtest  por lo q haremos q sea la funcion 
// de exportacion por defecto 

export default function npmtest(str){

    let translation = str
    const reverse = (str) => str.split('').reverse().join('')

    function minMay(str) { 
        const length = str.length
        let translation = ''
        let capitalize = true
        for(let i = 0; i < length; i++){
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }  

    if(str.toLowerCase() == reverse(str).toLowerCase()){ 
        return minMay(str.toLowerCase())
    }          

    if (str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2)
    }

    if(str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }

    if(translation.length >= 10){
        const firstHalf = translation.slice(0, Math.round(translation.length/2))
        const secondHalf = translation.slice(Math.round(translation.length/2))
        translation = `${firstHalf}-${secondHalf}`
    }

    return translation
}

// Este es el codigo fuente de nuestro modulo, q esta escribo en ES2015, pero el archivo
// q destribuiremos sera el transpilado de este archivo con babel, para esto debemos de instalar babel
// en nuestro modulo, esto se encuentra en https://babeljs.io/docs/en/babel-cli:
// entonces como vemos dentro de la carpeta de nuestro modulo en la teremianl debemos de ejcutar el comando:
//      npm install --save-dev @babel/core @babel/cli -> instlara babel de manera local en el modulo
// luego de esto en nuestro package.json se agrego una devDependencie( es una dependecia de desarrollo, estas
// son dependencias q el modulo nesesitara para poder compilarse o transmpilarse para generar el archivo 
// destribuible)
        // "devDependencies": {
        //     "@babel/cli": "^7.13.16",
        //     "@babel/core": "^7.13.16"
        //   }

// ahora crearemos el codigo transpilado con babel indicando el archivo q queremos transpilar y el nombre
// nombre del archivo q queremos q tenga el transpilado, esto esta en la pagin de babel, y lo haremos mediante 
// comandos dentro del nombre de nuestra carpeta, entonces hacemos le comando:
//      npx babel npmtest.js --out-file dist/src/npmtestDist.js
       // por defecto babel transpilara a common js q sera compatible con todos los navegadores y versiones,
       // en este caso el transpilado se llamara npmTestDist,js y lo guardaremos en la carpeta dist/src

// ahora por ultimo vamos a package.json y en main indicamos cual es nuestro archivo q distribuiremos en este caso
// es el codigo transpilado en dist/src entonces quedaria:
        // "main": "dist/src/npmtestDist.js",

