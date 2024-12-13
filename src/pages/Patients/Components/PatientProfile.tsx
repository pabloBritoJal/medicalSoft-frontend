import React, { useState } from "react";
import { IPatient } from "../../../types/patient";
import {
  MdDelete,
  MdEditSquare,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

interface PatientProfileProps {
  patient: IPatient;
}

const PatientProfile: React.FC<PatientProfileProps> = ({ patient }) => {
  const [close, setClose] = useState(false);
  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-x-4 ">
          <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">
            Información del Paciente
          </h2>
          <button
            title="Eliminar paciente"
            className="hover:text-primary hover:bg-primary/15 w-10 h-10 hover:rounded-full flex justify-center items-center"
          >
            <MdDelete />
          </button>
          <button
            title="Editar datos de paciente"
            className="hover:text-primary hover:bg-primary/15 w-10 h-10 hover:rounded-full flex justify-center items-center"
          >
            <MdEditSquare />
          </button>
        </div>
        <button onClick={() => setClose(!close)}>
          {close ? <MdKeyboardArrowDown size={30} /> : <MdKeyboardArrowUp size={30} />}
        </button>
      </div>

      {close && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información Identificativa */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Identificación
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Documento de Identidad:</strong> {patient.nationalId}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Nombres:</strong> {patient.firstName}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Apellidos:</strong> {patient.lastName}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Edad:</strong> {patient.age} años
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Sexo:</strong> {patient.gender}
          </p>
        </div>

        {/* Información General */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Información General
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Estado Civil:</strong> {patient.maritalStatus}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Número de Hijos:</strong> {patient.numberOfChildren}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Grupo Sanguíneo:</strong> {patient.bloodType}
          </p>
        </div>

        {/* Lugar de Procedencia */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Procedencia
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Lugar de Origen:</strong> {patient.origin}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Residencia Actual:</strong> {patient.currentResidence}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Residencias Anteriores:</strong>{" "}
            {patient.previousResidences?.join(", ")}
          </p>
        </div>

        {/* Información Adicional */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Información Adicional
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Religión:</strong> {patient.religion}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Escolaridad:</strong> {patient.educationLevel}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Ocupación:</strong> {patient.occupation}
          </p>
        </div>
      </div>}
    </div>
  );
};

export default PatientProfile;
