import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Debe ser un email válido."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
  retypePassword: z.string().min(6, "La confirmación de la contraseña debe tener al menos 6 caracteres."),
}).refine((data) => data.password === data.retypePassword, {
  path: ["retypePassword"],
  message: "Las contraseñas deben coincidir.",
});