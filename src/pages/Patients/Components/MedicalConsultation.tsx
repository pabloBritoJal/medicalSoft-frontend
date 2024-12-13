import React from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";

interface ConsultationProps {
  consultationDate: string;
  consultationTime: string;
  symptoms: string;
  currentIllness: string;
  personalHistory: string;
  familyHistory: string;
  habits: string;
  systemsReview: string;
  physicalExam: string;
  caseAnalysis: string;
  managementPlan: string;
  additionalNotes?: string;
}

const MedicalConsultation: React.FC<ConsultationProps> = ({
  consultationDate,
  consultationTime,
  symptoms,
  currentIllness,
  personalHistory,
  familyHistory,
  habits,
  systemsReview,
  physicalExam,
  caseAnalysis,
  managementPlan,
  additionalNotes,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-baseline gap-x-4 ">
        <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">
          Consulta Medica
        </h2>
        <button
          title="Eliminar Consulta"
          className="hover:text-primary hover:bg-primary/15 w-10 h-10 hover:rounded-full flex justify-center items-center"
        >
          <MdDelete />
        </button>
        <button
          title="Editar Consulta"
          className="hover:text-primary hover:bg-primary/15 w-10 h-10 hover:rounded-full flex justify-center items-center"
        >
          <MdEditSquare />
        </button>
      </div>

      {/* Información básica del paciente */}
      <p>
        <strong>Fecha:</strong> {consultationDate} - <strong>Hora:</strong>{" "}
        {consultationTime}
      </p>

      {/* Secciones de la consulta */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Motivo de Consulta
        </h3>
        <p>{symptoms}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Enfermedad Actual
        </h3>
        <p>{currentIllness}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Antecedentes
        </h3>
        <p>
          <strong>Personales:</strong> {personalHistory}
        </p>
        <p>
          <strong>Familiares:</strong> {familyHistory}
        </p>
        <p>
          <strong>Hábitos:</strong> {habits}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Revisión por Sistemas
        </h3>
        <p>{systemsReview}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Examen Físico
        </h3>
        <p>{physicalExam}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Análisis del Caso
        </h3>
        <p>{caseAnalysis}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Plan de Manejo
        </h3>
        <p>{managementPlan}</p>
      </div>

      {additionalNotes && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Notas Adicionales
          </h3>
          <p>{additionalNotes}</p>
        </div>
      )}
    </div>
  );
};

export default MedicalConsultation;
