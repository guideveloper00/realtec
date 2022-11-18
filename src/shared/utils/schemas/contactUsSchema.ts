import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatorio"),
  email: yup
    .string()
    .email("formato precisa ser de email")
    .required("Este campo é obrigatorio"),
  phoneStringifyed: yup
    .string()
    .min(14, "numero inválido")
    .required("Este campo é obrigatorio"),
  message: yup.string().required("Este campo é obrigatorio"),
});
