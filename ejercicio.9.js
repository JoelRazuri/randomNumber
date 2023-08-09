/*
    Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/


const randomNumber = (min=undefined, max=undefined) => (min === undefined || max === undefined)
    ?console.warn("Debe ingresar el valor mínimo y máximo")
    :console.info(`Número aleatorio entre 501 y 600: ${Math.ceil(Math.random() * (max - min + 1) + (min - 1))}`);


console.info("EJERCICIO 9");
randomNumber(501,600);
