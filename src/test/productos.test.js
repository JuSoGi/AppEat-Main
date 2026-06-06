test('agregar producto', () => {
  const productos = [];

  productos.push("Arroz");

  expect(productos.length).toBe(1);
});