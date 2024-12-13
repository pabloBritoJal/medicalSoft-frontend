import DatePickerOne from "../../../components/Forms/DatePicker/DatePickerOne";

const RegisterPatient = ({
  handleCancel,
}: {
  handleCancel: () => void;
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">
        Registro de Paciente
      </h2>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6.5">
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
          Información del Paciente
        </h3>
        <form className="space-y-5">
          {/* Nombres */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Nombres
            </label>
            <input
              type="text"
              placeholder="Ej. Juan Carlos"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Apellidos */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Apellidos
            </label>
            <input
              type="text"
              placeholder="Ej. Pérez Gómez"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Fecha de Nacimiento
            </label>
            <DatePickerOne />
          </div>

          {/* Número de Identificación */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Número de Identificación
            </label>
            <input
              type="text"
              placeholder="Ej. 12345678"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Contacto */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Contacto
            </label>
            <input
              type="text"
              placeholder="Ej. +591 65432109"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Dirección */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Dirección
            </label>
            <textarea
              rows={3}
              placeholder="Ej. Av. Siempre Viva #123"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Estado Civil */}
          <div>
            <label className="block text-black dark:text-white mb-2">
              Estado Civil
            </label>
            <select
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            >
              <option value="">Seleccione...</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
          </div>

          {/* Sexo */}
          <div>
            <label className="block text-black dark:text-white mb-2">Sexo</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sexo"
                  value="masculino"
                  className="form-radio h-4 w-4 border-gray-300 focus:ring-primary dark:border-gray-600 dark:focus:ring-primary"
                />
                Masculino
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sexo"
                  value="femenino"
                  className="form-radio h-4 w-4 border-gray-300 focus:ring-primary dark:border-gray-600 dark:focus:ring-primary"
                />
                Femenino
              </label>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-start gap-x-2">
            <button
              onClick={handleCancel}
              type="submit"
              className="mt-4 rounded-lg bg-primary py-3 px-5 text-white hover:bg-primary-dark"
            >
              Guardar Paciente
            </button>
            <button
              onClick={handleCancel}
              type="button"
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

export default RegisterPatient;