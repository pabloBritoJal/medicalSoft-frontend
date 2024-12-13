import React from "react";

interface ConsultationSummary {
  id: string;
  date: string;
  reason: string;
  doctorNotes: string;
}

interface ConsultationsTableProps {
  consultations: ConsultationSummary[];
  onViewDetails: (id: string) => void;
}

const ConsultationsTable: React.FC<ConsultationsTableProps> = ({
  consultations,
  onViewDetails,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
       <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">
          Consultas recientes
        </h2>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Fecha
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Motivo
              </th>
              <th className="min-w-[250px] py-4 px-4 font-medium text-black dark:text-white hidden sm:table-cell">
                Notas del Doctor
              </th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consultation) => (
              <tr
                key={consultation.id}
                onClick={() => onViewDetails(consultation.id)}
                className="hover:bg-primary/15 cursor-pointer"
              >
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {consultation.date}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {consultation.reason}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark hidden sm:table-cell">
                  <p className="truncate text-black dark:text-white">
                    {consultation.doctorNotes}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultationsTable;
