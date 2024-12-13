import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface CustomInputFormProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: FieldError;
  control: Control<T>;
}

const CustomInputForm = <T extends FieldValues>({
  name,
  label,
  type,
  placeholder,
  icon,
  rightIcon,
  error,
  control,
}: CustomInputFormProps<T>) => {
  return (
    <div className="mb-4">
      <label className="mb-2.5 block font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {icon && <span className="absolute left-4 top-5">{icon}</span>}
        
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              type={type}
              {...field}
              value={field.value || ""}
              placeholder={placeholder}
              className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-10 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none ${
                error ? "border-red-500" : ""
              }`}
            />
          )}
        />

        {rightIcon && <span className="absolute right-4 top-5">{rightIcon}</span>}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default CustomInputForm;
