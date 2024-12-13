export interface IPatient {
    id: number; // Identificador único del paciente
    createdAt?: string; // Fecha y hora de creación del registro
    firstName: string; // Nombres
    lastName: string; // Apellidos
    birthDate: string; // Fecha de nacimiento
    nationalId: string; // Documento de identidad
    age?: number; // Edad
    gender?: "Male" | "Female" | "Other"; // Sexo
    maritalStatus?: "Single" | "Married" | "Divorced" | "Widowed"; // Estado civil
    numberOfChildren?: number; // Número de hijos
    origin?: string; // Lugar de origen
    religion?: string; // Religión
    educationLevel?: string; // Escolaridad
    occupation?: string; // Ocupación
    bloodType?: string; // Grupo sanguíneo
    currentResidence?: string; // Residencia actual
    previousResidences?: string[]; // Residencias anteriores
    contact: string;
  }