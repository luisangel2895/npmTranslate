# npmtest

npmtest es un paquete de prueba donde se crea un filtro de palabras como traduccion de idiomas
este es mi primer paquete subido para mas info acerca de mi puedes entrar a [mi pagina](https://angelorellana.com).

## Reglas del filtro

1. Si la palabra termina con ar se le quitan esas 2 letras, programar  -> program
2. Si la palabra inicia con z se le anade pe al final zorro -> zorrope
3. Si la palagra traducita tienen 10 o mas letras se debe partir en 2 por la mitad y unir con un guion en medio abecedario -> abece-dario
4. Si la palabra original eds un palindromo no le aplicamos ninguna regla y solamente la imprimimos igual pero intercalando mayusculas y minusculas sometemos -> SoMeTeMoS

## Instalacion

```js
npm install npmtest
```

## Uso

```js
import npmtest from 'npmtest'

npmtest('programar')  // program
npmtest('zorro') // zorrope
npmtest('abecedario') //avece-dario
npmtest('Sometemos') // SoMeTeMoS
```

## creditos

- [Angel Orellana](https://angelorellana.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)