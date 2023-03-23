var marca = document.getElementById("marcaVehiculo");
var modelo = document.getElementById("modeloVehiculo");
var color = document.getElementById("colorVehiculo");

var data = {
  marcas: [
    { value: "Nissan", text: "Nissan" },
    { value: "Chevrolet", text: "Chevrolet" },
    { value: "Volvo", text: "Volvo" },
    { value: "BMW", text: "BMW" },
    { value: "BYD", text: "BYD" },
  ],
  modelos: {
    Nissan: [
      { value: "Económico Nissan", text: "Económico Nissan" },
      { value: "Lujo Nissan", text: "Lujo Nissan" },
    ],
    Chevrolet: [
      { value: "Económico Chevrolet", text: "Económico Chevrolet" },
      { value: "Lujo Chevrolet", text: "Lujo Chevrolet" },
    ],
    Volvo: [
      { value: "Económico Volvo", text: "Económico Volvo" },
      { value: "Lujo Volvo", text: "Lujo Volvo" },
    ],
    BMW: [
      { value: "Económico BMW", text: "Económico BMW" },
      { value: "Lujo BMW", text: "Lujo BMW" },
    ],
    BYD: [
      { value: "Económico BYD", text: "Económico BYD" },
      { value: "Lujo BYD", text: "Lujo BYD" },
    ],
  },
  colores: [
    { value: "Rojo", text: "Rojo" },
    { value: "Verde", text: "Verde" },
    { value: "Amarillo", text: "Amarillo" },
    { value: "Blanco", text: "Blanco" },
    { value: "Negro", text: "Negro" },
  ],
};

// Cargar datos de las marcas
for (var i = 0; i < data.marcas.length && i < 5; i++) {
  var option = document.createElement("option");
  option.value = data.marcas[i].value;
  option.text = data.marcas[i].text;
  marca.appendChild(option);
}

// Agregar evento change a la marca
marca.addEventListener("change", function () {
  var modelos = data.modelos[this.value];
  // Eliminar opciones anteriores del select de modelos
  while (modelo.options.length > 0) {
    modelo.remove(0);
  }

  // Agregar opciones correspondientes a la marca seleccionada
  for (var i = 0; i < modelos.length && i < 2; i++) {
    var option = document.createElement("option");
    option.value = modelos[i].value;
    option.text = modelos[i].text;
    modelo.appendChild(option);
  }
});

// Cargar datos de los colores
for (var i = 0; i < data.colores.length && i < 5; i++) {
  var option = document.createElement("option");
  option.value = data.colores[i].value;
  option.text = data.colores[i].text;
  color.appendChild(option);
}
