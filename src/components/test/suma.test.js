//PRUEBA REAL

const sum = require('./suma'); //Importa la función sum desde el archivo suma.js

test("La funcion sum debe devolver suma correcta", () => { //Definir el test
    expect(sum(1, 2)).toBe(3);
}); //expect toma el resultado - toBe Verificar el valor esperado
