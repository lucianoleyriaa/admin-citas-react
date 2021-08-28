// import ProtoTypes from 'prop-types'

const Cita = (props) => {
   return (
      <div className="cita">
         <p>
            Mascota: <span>{props.cita.mascota}</span>
         </p>
         <p>
            Dueño: <span>{props.cita.propietario}</span>
         </p>
         <p>
            Fecha: <span>{props.cita.fecha}</span>
         </p>
         <p>
            Hora: <span>{props.cita.hora}</span>
         </p>
         <p>
            Sintomas: <span>{props.cita.sintomas}</span>
         </p>
         <button
            className="button eliminar u-full-width"
            onClick={props.deleteCita.bind(props.cita.id)}
         >
            Eliminar
         </button>
      </div>
   );
};

// Cita.ProtoTypes = {
//    cita: pro
// }

export default Cita;
