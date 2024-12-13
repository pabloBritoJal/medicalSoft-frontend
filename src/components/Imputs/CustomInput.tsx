import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  error?: FieldError;
  control: Control<T>;
}

const CustomInput = <T extends FieldValues>({
  name,
  label,
  type,
  placeholder,
  icon,
  error,
  control,
}: CustomInputProps<T>) => {
  return (
    <div className="mb-4">
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              type={type}
              {...field}
              placeholder={placeholder}
              className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                error ? "border-red-500" : ""
              }`}
            />
          )}
        />

        {icon && <span className="absolute right-4 top-5">{icon}</span>}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
