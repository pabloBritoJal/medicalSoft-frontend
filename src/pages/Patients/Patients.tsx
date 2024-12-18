import { useState } from "react";
import { IPatient } from "../../types/patient";
import ConsultationsTable from "./Components/ConsultationsList";
import MedicalConsultation from "./Components/MedicalConsultation";
import PatientProfile from "./Components/PatientProfile";
import PatientsList from "./Components/PatientsList";
import RegisterConsultation from "./Components/RegisterConsultation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import RegisterPatient from "./Components/RegisterPatient";

const mockPatient: IPatient = {
  id: 1,
  createdAt: "2024-12-01 10:30",
  firstName: "Juan",
  lastName: "Pérez",
  birthDate: "1990-05-15",
  nationalId: "12345678",
  age: 34,
  gender: "Male",
  maritalStatus: "Married",
  numberOfChildren: 2,
  origin: "Cochabamba",
  religion: "Católica",
  educationLevel: "Universitario",
  occupation: "Ingeniero",
  bloodType: "O+",
  currentResidence: "Santa Cruz",
  previousResidences: ["La Paz", "Tarija"],
  contact: "12333555",
};

const mockConsultation = {
  consultationDate: "2024-12-10",
  consultationTime: "14:30",
  symptoms: "Dolor abdominal persistente",
  currentIllness: "Dolor abdominal iniciado hace 3 días, de carácter continuo.",
  personalHistory: "Hipertensión arterial, diabetes mellitus.",
  familyHistory: "Padre con infarto de miocardio, madre con hipertensión.",
  habits: "Fumador ocasional, consumo moderado de alcohol.",
  systemsReview: "Sin síntomas respiratorios ni cardiovasculares adicionales.",
  physicalExam:
    "Abdomen distendido, dolor a la palpación en cuadrante inferior derecho.",
  caseAnalysis: "Probable apendicitis aguda.",
  managementPlan:
    "Derivar a cirugía general para evaluación y tratamiento quirúrgico.",
  additionalNotes: "Paciente requiere control de glucosa y presión arterial.",
};

const mockConsultations = [
  {
    id: "1",
    date: "2024-12-09",
    reason: "Dolor de cabeza persistente",
    doctorNotes:
      "Paciente con historial de migrañas. Se recomienda seguimiento.",
  },
  {
    id: "2",
    date: "2024-11-15",
    reason: "Chequeo general",
    doctorNotes:
      "Estado de salud general adecuado. Se sugiere mantener rutina de ejercicios.",
  },
  {
    id: "3",
    date: "2024-10-22",
    reason: "Dolor abdominal",
    doctorNotes:
      "Posible gastritis. Se indican medicamentos y dieta controlada.",
  },
  {
    id: "3",
    date: "2024-10-22",
    reason: "Dolor abdominal",
    doctorNotes:
      "Posible gastritis. Se indican medicamentos y dieta controlada.",
  },
  {
    id: "3",
    date: "2024-10-22",
    reason: "Dolor abdominal",
    doctorNotes:
      "Posible gastritis. Se indican medicamentos y dieta controlada.",
  },
  {
    id: "3",
    date: "2024-10-22",
    reason: "Dolor abdominal",
    doctorNotes:
      "Posible gastritis. Se indican medicamentos y dieta controlada.",
  },
  {
    id: "3",
    date: "2024-10-22",
    reason: "Dolor abdominal",
    doctorNotes:
      "Posible gastritis. Se indican medicamentos y dieta controlada.",
  },
  {
    id: "3",
    date: "2024-10-22",
    reason: "Dolor abdominal",
    doctorNotes:
      "Posible gastritis. Se indican medicamentos y dieta controlada.",
  },
];

interface IComponentsToShow {
  registerPatient: boolean;
  patientsList: boolean;
  patientProfile: boolean;
  backButton: boolean;
  registerButton: boolean;
  medicalConsultation: boolean;
  registerConsultation: boolean;
  consultationsTable: boolean;
}

const initComponentsToShow: IComponentsToShow = {
  registerPatient: false,
  patientsList: true,
  patientProfile: false,
  backButton: false,
  registerButton: false,
  medicalConsultation: false,
  registerConsultation: false,
  consultationsTable: false,
};

const PatientsPage = () => {
  const [componentsToShow, setcomponentsToShow] =
    useState<IComponentsToShow>(initComponentsToShow);

  const handleViewDetails = (id: string) => {
    console.log(`Viewing details for consultation ID: ${id}`);
    setcomponentsToShow({
      registerPatient: false,
      patientsList: false,
      patientProfile: true,
      backButton: true,
      registerButton: false,
      medicalConsultation: true,
      registerConsultation: false,
      consultationsTable: false,
    });
  };

  const handleBack = () => {
    setcomponentsToShow({
      registerPatient: false,
      patientsList: false,
      patientProfile: true,
      backButton: false,
      registerButton: true,
      medicalConsultation: false,
      registerConsultation: false,
      consultationsTable: true,
    });
  };

  const handleBackMain = () => {
    setcomponentsToShow(initComponentsToShow);
  };

  const handleRegisterConsultation = () => {
    setcomponentsToShow({
      registerPatient: false,
      patientsList: false,
      patientProfile: true,
      backButton: false,
      registerButton: false,
      medicalConsultation: false,
      registerConsultation: true,
      consultationsTable: false,
    });
  };

  const handleViewPatient = (id: number) => {
    console.log(id);
    setcomponentsToShow({
      registerPatient: false,
      patientsList: false,
      patientProfile: true,
      backButton: false,
      registerButton: true,
      medicalConsultation: false,
      registerConsultation: false,
      consultationsTable: true,
    });
  };

  const handleRegisterPatient = () => {
    setcomponentsToShow({
        registerPatient: true,
        patientsList: false,
        patientProfile: false,
        backButton: false,
        registerButton: false,
        medicalConsultation: false,
        registerConsultation: false,
        consultationsTable: false,
      });
  }

  return (
    <>
      {componentsToShow.patientsList && (
        <div className="w-full flex justify-end my-5">
          <button
            onClick={handleRegisterPatient}
            className="flex w-50 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Nuevo paciente
          </button>
        </div>
      )}
      <div className="flex flex-col gap-y-4">
        {componentsToShow.patientsList && (
          <PatientsList handleViewPatient={handleViewPatient} />
        )}
        {componentsToShow.patientProfile && (
          <div>
            <button onClick={handleBackMain} className="flex items-center h-8">
              <MdKeyboardArrowLeft size={30} />
              <h4 className="flex items-start">Atras</h4>
            </button>
            <PatientProfile patient={mockPatient} />
          </div>
        )}

        {componentsToShow.registerButton && (
          <div className="w-full flex justify-end">
            <button
              onClick={handleRegisterConsultation}
              className="flex w-50 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Registrar consulta
            </button>
          </div>
        )}
        {componentsToShow.backButton && (
          <button onClick={handleBack} className="flex items-center h-8">
            <MdKeyboardArrowLeft size={30} />
            <h4 className="flex items-start">Atras</h4>
          </button>
        )}
        {componentsToShow.medicalConsultation && (
          <MedicalConsultation {...mockConsultation} />
        )}
        {componentsToShow.registerConsultation && (
          <RegisterConsultation handleCancel={handleBack} />
        )}
        {componentsToShow.consultationsTable && (
          <ConsultationsTable
            consultations={mockConsultations}
            onViewDetails={handleViewDetails}
          />
        )}
       { componentsToShow.registerPatient && <RegisterPatient handleCancel={handleBackMain} />}
      </div>
    </>
  );
};

export default PatientsPage;
