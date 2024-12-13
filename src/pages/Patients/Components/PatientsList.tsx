import { IPatient } from "../../../types/patient";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { FaEye } from "react-icons/fa";

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
];

const PatientsList = ({
  handleViewPatient,
}: {
  handleViewPatient: (id: number) => void;
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Nombre
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white hidden sm:table-cell">
                Fecha de nacimiento
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white hidden sm:table-cell">
                Contacto
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Nro CI
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white hidden sm:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockPatients.map((patient) => (
              <tr
                onClick={() => handleViewPatient(patient.id)}
                className="hover:bg-slate-300/25"
                key={patient.nationalId}
              >
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {`${patient.firstName} ${patient.lastName}`}
                  </h5>
                  <p className="text-sm">33 años</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark hidden sm:table-cell">
                  <p className="text-black dark:text-white">
                    {patient.birthDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark hidden sm:table-cell">
                  <p className="text-black dark:text-white">
                    {patient.contact}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {patient.nationalId}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark hidden sm:table-cell">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <FaEye />
                    </button>
                    <button className="hover:text-primary">
                      <MdDelete />
                    </button>
                    <button className="hover:text-primary">
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
  );
};

export default PatientsList;
