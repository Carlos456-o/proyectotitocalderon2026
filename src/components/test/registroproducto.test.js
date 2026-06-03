const registroproducto = require("./registroproducto");

console.log("Prueba de registro de producto");
describe("Prueba de validación de registro de producto", () => {
  it ("No permite guardar campos vacíos", () => {
    const producto = {
      id_categoria: '',
      nombre_producto: '',
      descripcion: '',
      precio: '',
      stock: ''
    };
  const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("Campos obligatorios incompletos");
  });

  console.log("Prueba 2: de validación de nombre de producto");
  it ("Debe rechazar precio negativo", () => {
    const producto = {
      id_categoria: '1',
      nombre_producto: "Martillo",
      descripcion: "Descripción de prueba",
      precio: -10,
      stock: 5
    };
    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("El precio");
  });

  console.log('Prueba 3: El stock debe ser mayor a cero');
  it("No permite stock menor que cero", () => {
    const producto = {
      nombre_producto: 'Martillo',
      id_categoria: '1',
      precio_venta: 10,
      stock: -5
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("stock");
  });

  console.log('Prueba 4: Descripción de producto extensa');
  it("No permite descripción muy larga", () => {
    const producto = {
      nombre_producto: 'Martillo',
      id_categoria: '1',
      precio_venta: 10,
      stock: 5,
      descripcion: 'a'.repeat(300)
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain("descripción");
  });

  console.log('Prueba 5: Producto registrado correctamente');
  it("Agregar producto correctamente", () => {
    const producto = {
      nombre_producto: 'Martillo',
      id_categoria: '1',
      precio_venta: 10,
      stock: 5
    };

    const resultado = registroproducto(producto);
    expect(resultado.valido).toBe(true);
  });
});