import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
   const defaultFormValues = {
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
   };

   // Crear state de citas
   const [cita, setCita] = useState(defaultFormValues);

   const [error, setError] = useState(false);

   const updateState = (e) => {
      setCita((lastState) => {
         return { ...lastState, [e.target.name]: e.target.value };
      });
   };

   // Extrayendo los valores
   const { mascota, propietario, fecha, hora, sintomas } = cita;

   const addNewCita = (e) => {
      e.preventDefault();

      // Validar
      if (
         mascota === "" ||
         propietario === "" ||
         fecha === "" ||
         hora === "" ||
         sintomas === ""
      ) {
         return setError(true);
      }

      setError(false);

      cita.id = uuidv4();

      props.guardarCita(cita);

      // Resetear el formulario
      setCita(defaultFormValues);
   };

   return (
      <Fragment>
         <h2>Crear sitas</h2>
         {error ? (
            <p className="alerta-error">Todos los campos son obligatorios!</p>
         ) : null}
         <form>
            <label>Nombre mascota</label>
            <input
               type="text"
               name="mascota"
               placeholder="Nombre mascota"
               className="u-full-width"
               onChange={updateState}
               value={mascota}
            />
            <label>Nombre Dueño</label>
            <input
               type="text"
               name="propietario"
               placeholder="Nombre propietario"
               className="u-full-width"
               onChange={updateState}
               value={propietario}
            />
            <label>Fecha</label>
            <input
               type="date"
               name="fecha"
               className="u-full-width"
               onChange={updateState}
               value={fecha}
            />
            <label>Hora</label>
            <input
               type="time"
               name="hora"
               className="u-full-width"
               onChange={updateState}
               value={hora}
            />
            <label>Sintomas</label>
            <textarea
               type="text"
               name="sintomas"
               placeholder="Ingrese los sintomas"
               className="u-full-width"
               onChange={updateState}
               value={sintomas}
            ></textarea>
            <button
               className="u-full-width button-primary"
               type="submit"
               onClick={addNewCita}
            >
               Agregar Cita
            </button>
         </form>
      </Fragment>
   );
};

export default Form;
