import { Fragment, useState } from "react";
import Form from "./components/Form/Form";
import Cita from "./components/Cita/Cita";

import "./App.css";

function App() {
   const [citas, saveCitas] = useState([]);

   const createNewCita = (cita) => {
      saveCitas((lastState) => {
         return [cita, ...lastState];
      });
   };

   const deleteCita = function () {
      const nuevasCitas = citas.filter((cita) => {
         return cita.id !== this;
      });

      saveCitas(nuevasCitas);
   };

   return (
      <Fragment>
         <h1>Administrador de pacientes</h1>
         <div className="container">
            <div className="row">
               <div className="one-half column">
                  <Form guardarCita={createNewCita} />
               </div>
               <div className="one-half column">
                  {citas.length === 0 ? (
                     <h2>No hay citas</h2>
                  ) : (
                     <h2>Administra tus citas</h2>
                  )}

                  {citas.map((cita) => {
                     return (
                        <Cita
                           cita={cita}
                           key={cita.id}
                           deleteCita={deleteCita}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </Fragment>
   );
}

export default App;
