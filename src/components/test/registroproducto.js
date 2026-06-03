function registroproducto(producto) {
  const {id_categoria, nombre_producto, descripcion, precio, stock} = producto;
  const precioVenta = precio != null ? precio : producto.precio_venta;

  // campos obligatorios
  if (
    id_categoria == null || id_categoria === "" ||
    nombre_producto == null || nombre_producto === "" ||
    precioVenta == null || precioVenta === "" ||
    stock == null || stock === ""
  ) {
    if (typeof alert !== "undefined") {
      alert("Por favor, complete todos los campos obligatorios.");
    }
    return { valido: false, mensaje: "Campos obligatorios incompletos" };
  }

  const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
  if (!regexNombre.test(nombre_producto)) {
    return { valido: false, mensaje: "El nombre del producto solo puede contener letras y espacios" };
  }

  const precioNum = Number(precioVenta);
  if (Number.isNaN(precioNum) || precioNum <= 0) {
    return { valido: false, mensaje: "El precio de venta debe ser un número positivo" };
  }

  const stockNum = Number(stock);
  if (Number.isNaN(stockNum) || stockNum < 0) {
    return { valido: false, mensaje: "El stock debe ser un número positivo o cero" };
  }
  
  if (descripcion && descripcion !== "") {
    if (!regexNombre.test(descripcion)) {
      return { valido: false, mensaje: "La descripción solo puede contener letras y espacios" };
    }
    if (descripcion.length > 255) {
      return { valido: false, mensaje: "La descripción no puede superar los 255 caracteres" };
    }
  }

  return { valido: true };
}

module.exports = registroproducto;

