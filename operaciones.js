const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const file = fs.readFileSync("./citas.json", "utf8");
  const data = JSON.parse(file);

  const appointment = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  };
  fs.writeFileSync("citas.json", JSON.stringify([...data, appointment]));
  console.log("¡Cita registrada con éxito!");
};

const leer = () => {
  const file = fs.readFileSync("./citas.json", "utf8");
  console.log(`Registro de Citas: \n ${file}`);
};

module.exports = { registrar, leer };
