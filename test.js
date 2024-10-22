// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Un Yen son 0,0051 Libras", function(){
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(194);
    const expected = 194 * 0.0051;

    expect(fromYenToPound(194.44)).toBe(0.9916440000000001);
})

test("Un Dolar son 151 Yenes", function(){
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(1);
    const expected = 1 * 151;

    expect(fromDollarToYen(1)).toBe(151);
})