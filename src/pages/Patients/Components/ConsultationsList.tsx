import React from "react";

const TEXTS = {
  TITLE: "Consultas recientes",
  TABLE_HEADERS: {
    DATE: "Fecha",
    REASON: "Motivo",
    DOCTOR_NOTES: "Notas del Doctor",
  },
};

// Clases reutilizables
const CLASSES = {
  tableHeader: "py-4 px-4 font-medium text-gray-600 dark:text-gray-200",
  tableCell: "border-b border-gray-200 py-3 px-4 dark:border-gray-700",
  tableContainer: "max-h-[15rem] overflow-y-auto",
  hiddenOnSmall: "hidden sm:table-cell",
  hoverRow: "hover:bg-primary/15 cursor-pointer transition-all",
};

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
    <div className="flex flex-col gap-x-1">
      {/* Título */}
      <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">
        {TEXTS.TITLE}
      </h2>
      <div className="rounded-b-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        {/* Tabla */}
        <div className="w-full overflow-x-auto">
          {/* Encabezado */}
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left dark:bg-gray-700">
                <th className={`min-w-[220px] ${CLASSES.tableHeader}`}>
                  {TEXTS.TABLE_HEADERS.DATE}
                </th>
                <th className={`min-w-[150px] ${CLASSES.tableHeader}`}>
                  {TEXTS.TABLE_HEADERS.REASON}
                </th>
                <th
                  className={`min-w-[250px] ${CLASSES.tableHeader} ${CLASSES.hiddenOnSmall}`}
                >
                  {TEXTS.TABLE_HEADERS.DOCTOR_NOTES}
                </th>
              </tr>
            </thead>
          </table>

          {/* Cuerpo con Scroll */}
          <div className={CLASSES.tableContainer}>
            <table className="w-full table-fixed">
              <tbody>
                {consultations.map((consultation) => (
                  <tr
                    key={consultation.id}
                    onClick={() => onViewDetails(consultation.id)}
                    className={CLASSES.hoverRow}
                  >
                    <td className={`min-w-[220px] ${CLASSES.tableCell}`}>
                      <h5 className="font-medium text-gray-800 dark:text-gray-200">
                        {consultation.date}
                      </h5>
                    </td>
                    <td className={`min-w-[150px] ${CLASSES.tableCell}`}>
                      <p className="text-gray-800 dark:text-gray-200">
                        {consultation.reason}
                      </p>
                    </td>
                    <td
                      className={`min-w-[250px] ${CLASSES.tableCell} ${CLASSES.hiddenOnSmall}`}
                    >
                      <p className="truncate text-gray-800 dark:text-gray-200">
                        {consultation.doctorNotes}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsTable;
