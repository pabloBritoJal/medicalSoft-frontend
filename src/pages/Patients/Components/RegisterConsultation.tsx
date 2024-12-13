import DatePickerOne from "../../../components/Forms/DatePicker/DatePickerOne";

const RegisterConsultation = ({
  handleCancel,
}: {
  handleCancel: () => void;
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">
        Registro de consulta
      </h2>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6.5">
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
          Información de la Consulta
        </h3>
        <form className="space-y-5">
          {/* Fecha y Hora */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Fecha de la Consulta
            </label>
            <DatePickerOne />
          </div>

          {/* Motivo de Consulta */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Motivo de Consulta
            </label>
            <textarea
              rows={3}
              placeholder="Describe el motivo de la consulta"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Enfermedad Actual */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Enfermedad Actual
            </label>
            <textarea
              rows={3}
              placeholder="Describe los síntomas y detalles de la enfermedad actual"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Revisión */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Revisión por Sistemas
            </label>
            <textarea
              rows={3}
              placeholder="Registra la revisión de los sistemas"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Examen Físico */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Examen Físico
            </label>
            <textarea
              rows={3}
              placeholder="Detalles del examen físico realizado"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Signos Vitales */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Signos Vitales
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Presión Arterial (ej. 120/80)"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <input
                type="text"
                placeholder="Frecuencia Cardíaca (ej. 72 bpm)"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <input
                type="text"
                placeholder="Temperatura Corporal (ej. 37.5°C)"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <input
                type="text"
                placeholder="Saturación de Oxígeno (ej. 98%)"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          {/* Análisis del Caso */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Análisis del Caso
            </label>
            <textarea
              rows={3}
              placeholder="Describe el análisis clínico del caso"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Plan de Manejo */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Plan de Manejo
            </label>
            <textarea
              rows={3}
              placeholder="Describe el plan de manejo, tratamiento o recomendaciones"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Botón de Guardar */}
          <div className="flex justify-start gap-x-2">
            <button
              onClick={handleCancel}
              type="submit"
              className="mt-4 rounded-lg bg-primary py-3 px-5 text-white hover:bg-primary-dark"
            >
              Guardar Consulta
            </button>
            <button
              onClick={handleCancel}
              type="submit"
              className="mt-4 rounded-lg bg-red-400 py-3 px-5 text-white hover:bg-primary-dark"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterConsultation;
