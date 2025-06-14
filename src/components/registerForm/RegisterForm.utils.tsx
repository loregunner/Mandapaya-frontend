import * as yup from "yup";

const requiredField = "Campo obligatorio";

export const registerSchema = yup.object().shape({
  name: yup.string().required(requiredField),
  lastName: yup.string().required(requiredField),
  email: yup.string().email("Correo inválido").required(requiredField),
  password: yup.string().min(6, "Mínimo 6 caracteres").required(requiredField),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Debe tener 10 dígitos")
    .required(requiredField),
  address: yup.string().required(requiredField),
  identificationType: yup.string().required(requiredField),
  numberDocument: yup.string().required(requiredField),
  personType: yup.string().required(requiredField),
  title: yup.string().required(requiredField),
  deparment: yup.string().required(requiredField),
  city: yup.string().required(requiredField),
  zipcode: yup.string().required(requiredField),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Correo inválido").required(requiredField),
  password: yup.string().min(6, "Mínimo 6 caracteres").required(requiredField),
});

export const rememberSchema = yup.object().shape({
  email: yup.string().email("Correo inválido").required(requiredField),
  newpassword: yup.string().min(6, "Mínimo 6 caracteres").required(requiredField),
});

export const tiposPersona = [
  { id: 0, label: "Persona Natural" },
  { id: 1, label: "Persona Jurídica" },
];

export const tiposDocumento = [
  { id: 1, label: "Cédula de ciudadanía" },
  { id: 2, label: "Cédula de extranjería" },
  { id: 3, label: "Tarjeta de identidad" },
  { id: 4, label: "Pasaporte" },
  { id: 5, label: "Número de Identificación Tributaria" },
];
