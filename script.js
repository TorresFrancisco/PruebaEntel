const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

function validateData(data) {

  const { nombreApellido, rutVendedor, patenteVehiculo, marcaVehiculo, modeloVehiculo, colorVehiculo } = data;

  if (nombreApellido === ""||  rutVendedor === "" || patenteVehiculo === "" || marcaVehiculo === "0" || modeloVehiculo === "0" || colorVehiculo === "0") {
    alert("Debe completar todos los campos del formulario");

    return false;
  }
  else {
    alert("ficha enviada")
  }
return true

}


function addData() {
  const data = {
    nombreApellido: document.getElementById("nombreApellido").value.trim(),
    rutVendedor: document.getElementById("rutVendedor").value.trim(),
    patenteVehiculo: document.getElementById("patenteVehiculo").value.trim(),
    marcaVehiculo: document.getElementById("marcaVehiculo").value,
    modeloVehiculo: document.getElementById("modeloVehiculo").value,
    colorVehiculo: document.getElementById("colorVehiculo").value,
  };

  if (validateData(data)) {
    resetForm();
    const datos = localStorage.getItem("datos")
      ? JSON.parse(localStorage.getItem("datos"))
      : [];

    datos.push(data);
    localStorage.setItem("datos", JSON.stringify(datos));
    updateTable();
  }
}

function validarFormulario() {
  const data = {
    nombreApellido: document.getElementById("nombreApellido").value.trim(),
    rutVendedor: document.getElementById("rutVendedor").value.trim(),
    patenteVehiculo: document.getElementById("patenteVehiculo").value.trim(),
    marcaVehiculo: document.getElementById("marcaVehiculo").value,
    modeloVehiculo: document.getElementById("modeloVehiculo").value,
    colorVehiculo: document.getElementById("colorVehiculo").value,
  };

  if (validateData(data)) {
    addData();
  }
}

function updateTable() {
  const datos = localStorage.getItem("datos")
    ? JSON.parse(localStorage.getItem("datos"))
    : [];

  // Obtener los últimos 10 elementos del arreglo datos
  const lastTenDatos = datos.slice(Math.max(datos.length - 10, 0));

  const tabla = lastTenDatos.reduce((html, dato, i) => {
    return (
      html +
      `
      <tr>
        <td>${dato.nombreApellido}</td>
        <td>${dato.rutVendedor}</td>
        <td>${dato.patenteVehiculo}</td>
        <td>${dato.marcaVehiculo}</td>
        <td>${dato.modeloVehiculo}</td>
        <td>${dato.colorVehiculo}</td>
        <td><a onclick="deleteRow(${i})"><img src="basurero.png" alt="" class="basura" ></img></a></td>
      </tr>
    `
    );
  }, "");
  tbody.innerHTML = tabla;
}
updateTable();

//vaciar datos del formulario
function resetForm() {
  document.getElementById("nombreApellido").value = "";
  document.getElementById("rutVendedor").value = "";
  document.getElementById("patenteVehiculo").value = "";
  document.getElementById("marcaVehiculo").value = "";
  document.getElementById("modeloVehiculo").value = "";
  document.getElementById("colorVehiculo").value = "";
}

function deleteRow(index) {
  const datos = localStorage.getItem("datos")
    ? JSON.parse(localStorage.getItem("datos"))
    : [];
  datos.splice(index, 1);
  localStorage.setItem("datos", JSON.stringify(datos));
  updateTable();
}


