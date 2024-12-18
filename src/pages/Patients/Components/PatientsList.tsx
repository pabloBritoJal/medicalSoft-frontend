import { IPatient } from "../../../types/patient";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const TEXTS = {
  NAME: "Nombre",
  BIRTH_DATE: "Fecha de nacimiento",
  CONTACT: "Contacto",
  NATIONAL_ID: "Nro CI",
  ACTIONS: "Actions",
  AGE_LABEL: "33 años",
};

const CLASSES = {
  tableHeader: "py-4 px-4 font-semibold text-gray-600 dark:text-gray-200",
  tableCell: "border-b border-gray-200 py-4 px-4 dark:border-gray-700",
  hiddenOnSmall: "hidden sm:table-cell",
  actionButton:
    "text-gray-500 hover:text-primary transition-colors cursor-pointer",
};

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  contact: string;
  nationalId: string;
}

interface TableProps {
  patients: Patient[];
  handleViewPatient: (id: string) => void;
}

export const mockPatients: IPatient[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    birthDate: "1990-05-15",
    contact: "123-456-7890",
    nationalId: "12345678",
  },
  {
    id: 1,
    firstName: "Jane",
    lastName: "Smith",
    birthDate: "1985-11-20",
    contact: "987-654-3210",
    nationalId: "87654321",
  },
  {
    id: 1,
    firstName: "Michael",
    lastName: "Brown",
    birthDate: "1975-07-30",
    contact: "555-666-7777",
    nationalId: "34567890",
  },
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    birthDate: "2000-02-12",
    contact: "111-222-3333",
    nationalId: "56789012",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
  {
    id: 1,
    firstName: "David",
    lastName: "Wilson",
    birthDate: "1995-09-25",
    contact: "444-555-6666",
    nationalId: "78901234",
  },
];

const PatientsList = ({
  handleViewPatient,
}: {
  handleViewPatient: (id: number) => void;
}) => {
  return (
    <div className="rounded-b-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full overflow-x-auto">
        {/* Encabezado */}
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left dark:bg-gray-700">
              <th className={`w-3/12 ${CLASSES.tableHeader}`}>{TEXTS.NAME}</th>
              <th
                className={`w-3/12 ${CLASSES.tableHeader} ${CLASSES.hiddenOnSmall}`}
              >
                {TEXTS.BIRTH_DATE}
              </th>
              <th
                className={`w-2/12 ${CLASSES.tableHeader} ${CLASSES.hiddenOnSmall}`}
              >
                {TEXTS.CONTACT}
              </th>
              <th className={`w-2/12 ${CLASSES.tableHeader}`}>
                {TEXTS.NATIONAL_ID}
              </th>
              <th
                className={`w-2/12 ${CLASSES.tableHeader} ${CLASSES.hiddenOnSmall}`}
              >
                {TEXTS.ACTIONS}
              </th>
            </tr>
          </thead>
        </table>

        {/* Cuerpo con Scroll */}
        <div className="max-h-[24rem] overflow-y-auto">
          <table className="w-full table-fixed">
            <tbody>
              {mockPatients.map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => handleViewPatient(patient.id)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-all"
                >
                  <td className={`w-3/12 ${CLASSES.tableCell}`}>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200">
                      {`${patient.firstName} ${patient.lastName}`}
                    </h5>
                    <p className="text-sm text-gray-500">{TEXTS.AGE_LABEL}</p>
                  </td>
                  <td
                    className={`w-3/12 ${CLASSES.tableCell} ${CLASSES.hiddenOnSmall}`}
                  >
                    <p className="text-gray-800 dark:text-gray-200">
                      {patient.birthDate}
                    </p>
                  </td>
                  <td
                    className={`w-2/12 ${CLASSES.tableCell} ${CLASSES.hiddenOnSmall}`}
                  >
                    <p className="text-gray-800 dark:text-gray-200">
                      {patient.contact}
                    </p>
                  </td>
                  <td className={`w-2/12 ${CLASSES.tableCell}`}>
                    <p className="text-gray-800 dark:text-gray-200">
                      {patient.nationalId}
                    </p>
                  </td>
                  <td
                    className={`w-2/12 ${CLASSES.tableCell} ${CLASSES.hiddenOnSmall}`}
                  >
                    <div className="flex items-center space-x-4">
                      <button className={CLASSES.actionButton}>
                        <FaEye />
                      </button>
                      <button className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
                        <MdDelete />
                      </button>
                      <button className="text-gray-500 hover:text-blue-500 transition-colors cursor-pointer">
                        <MdEditSquare />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
