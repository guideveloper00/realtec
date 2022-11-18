import * as S from "./styles";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../shared/utils/schemas/contactUsSchema";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import $ from "jquery";

type Form = {
  name: string;
  email: string;
  phoneStringifyed: string;
  message: string;
};

export const ContactUs = () => {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    defaultValues: {
      phoneStringifyed: "",
    },
  });

  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const onSubmitHandler = async ({
    name,
    email,
    phoneStringifyed,
    message,
  }: Form) => {
    recaptchaRef.current?.executeAsync().then((recaptchaToken) => {
      const phoneNumber = handleMaskedPhone(phoneStringifyed);
      const data = {
        service_id: "service_k4uj47e",
        template_id: "template_h2l87td",
        user_id: "p-ln-s5YK3HrVCDri",
        template_params: {
          from_name: name,
          email: email,
          phoneNumber: phoneNumber,
          message: message,
          "g-recaptcha-response": recaptchaToken,
        },
      };
      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
      })
        .done(function () {
          alert("Your mail is sent!");
        })
        .fail(function (error) {
          alert("Oops... " + JSON.stringify(error));
        });
    });
  };

  const handleMaskedPhone = (phoneString: string) => {
    const arrayPhone = phoneString.split("");
    const parsedPhone = arrayPhone.filter((item: string) => {
      return +item;
    });
    return parsedPhone.join("");
  };

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})/, "$1-$2");
  };

  const onReCAPTCHAChange = (token: string | null) => {
    if (!token) {
      return;
    }
    recaptchaRef.current?.reset();
  };

  return (
    <S.Container>
      <S.Title>Entre em contato conosco!</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.FormItemsPosition>
          <S.ItemPosition>
            <label>Nome*</label>
            <input {...register("name")} placeholder="Seu nome" />
            <S.ErrorMessage>{errors?.name?.message || ""}</S.ErrorMessage>
          </S.ItemPosition>
          <S.ItemPosition>
            <label>Email*</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Seu email"
            />
            <S.ErrorMessage>{errors?.email?.message || ""}</S.ErrorMessage>
          </S.ItemPosition>
          <S.ItemPosition>
            <label>Celular*</label>
            <Controller
              name="phoneStringifyed"
              control={control}
              render={({ field: { onChange, value } }) => {
                console.log(value);
                return (
                  <input
                    maxLength={15}
                    value={value}
                    onChange={(e) => onChange(maskPhone(e.target.value))}
                    placeholder="Seu celular"
                  />
                );
              }}
            />
            <S.ErrorMessage>
              {errors?.phoneStringifyed?.message || ""}
            </S.ErrorMessage>
          </S.ItemPosition>
        </S.FormItemsPosition>
        <S.FormTextAreaPosition>
          <label>Mensagem*</label>
          <S.TextArea {...register("message")}></S.TextArea>
          <S.ErrorMessage>{errors?.message?.message || ""}</S.ErrorMessage>
        </S.FormTextAreaPosition>
        <S.Captcha>
          <ReCAPTCHA
            sitekey="6LdJ86QiAAAAAJ4y08SIyBnsVLpSvAtyiSeiRL_i"
            onChange={onReCAPTCHAChange}
            size="invisible"
            ref={recaptchaRef}
            id="captcha"
          />
        </S.Captcha>
        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
};
