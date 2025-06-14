/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch } from "react";
import Input from "@/ui/input/Input";
import { useForm } from "react-hook-form";
import Button from "@/ui/button/Button";
import { LoginFormWrapper } from "../loginForm/LoginForm.style";
import { userRegister } from "@/api/Auth";
import { IuserPayload } from "@/utils/interfaces";
import Select from "@/ui/select/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  registerSchema,
  tiposDocumento,
  tiposPersona,
} from "./RegisterForm.utils";
import useAnimation from "@/hooks/useAnimation";
import Animation from "@/ui/animation/Animation";

interface IRegister {
  setPopup: Dispatch<boolean>;
}

export const RegisterForm = ({ setPopup }: IRegister) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema) as any,
  });
  const [AnimationOpen, setAnimationOpen, toggleAnimation] =
    useAnimation(false);
  const onSubmit = async (data: any) => {
    const requestBody: IuserPayload = {
      t: 7,
      email: data.email,
      password: data.password,
      name: data.name,
      lastname: data.lastName,
      phone: data.phone,
      address: data.address,
      idnumber: data.numberDocument,
      identification_type: +data.identificationType,
      person_type: data.personType,
      city: data.city,
      state: data.deparment,
      zipcode: data.zipcode,
      treatment: data.title,
    };
    const response = await userRegister(requestBody);
    toggleAnimation();
    response()
      .then((resp: any) => {
        setAnimationOpen(false);
        setPopup(true);
      })
      .catch((err: any) => {
        console.error("Login failed:", err);
        setAnimationOpen(false);
      });
  };
  return (
    <LoginFormWrapper>
      <h2 className="title">Crear una cuenta</h2>
      <p className="subtitle">Completa el formulario para registrarse</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name_user">
          <Input
            type="text"
            label={"Nombre"}
            registerName={"name"}
            placeholder="Tu nombre"
            register={register}
            errors={errors.name?.message}
          />
          <Input
            type="text"
            label={"Apellido"}
            registerName={"lastName"}
            placeholder="Tu apellido"
            register={register}
            errors={errors.lastName?.message}
          />
        </div>
        <Input
          type="text"
          label={"Correo electrónico"}
          registerName={"email"}
          placeholder="tu@email.com"
          errors={errors.email?.message}
          register={register}
        />
        <Input
          type="password"
          label={"Contraseña"}
          registerName={"password"}
          placeholder="*********"
          register={register}
          errors={errors.password?.message}
        />
        <div className="name_user">
          <Input
            type="text"
            label={"Teléfono"}
            registerName={"phone"}
            placeholder="3001234567"
            register={register}
            errors={errors.phone?.message}
          />
          <Input
            type="text"
            label={"Dirección"}
            registerName={"address"}
            placeholder="Crr 123"
            register={register}
            errors={errors.address?.message}
          />
        </div>
        <div className="name_user">
          <Select
            label={"Tipo de identificación"}
            arrayView={tiposDocumento}
            registerName="identificationType"
            register={register}
            errors={errors.identificationType?.message}
          />
          <Input
            type="text"
            label={"Número de documento"}
            registerName={"numberDocument"}
            placeholder="101*******"
            register={register}
            errors={errors.numberDocument?.message}
          />
        </div>
        <div className="name_user">
          <Select
            label={"Tipo de persona"}
            registerName={"personType"}
            arrayView={tiposPersona}
            register={register}
            errors={errors.personType?.message}
          />
          <Input
            type="text"
            label={"Título"}
            registerName={"title"}
            placeholder="Sra"
            register={register}
            errors={errors.title?.message}
          />
        </div>
        <div className="name_user">
          <Input
            type="text"
            label={"Departamento"}
            registerName={"deparment"}
            placeholder="Cundinamarca"
            errors={errors.deparment?.message}
            register={register}
          />
          <Input
            type="text"
            label={"Ciudad"}
            registerName={"city"}
            placeholder="Bogotá"
            errors={errors.city?.message}
            register={register}
          />
        </div>
        <Input
          type="text"
          label={"Código postal"}
          registerName={"zipcode"}
          placeholder="1012***"
          errors={errors.zipcode?.message}
          register={register}
        />
        <Button size={"fluid"} color={"primary"} type={"submit"}>
          <span>Continuar</span>
        </Button>
      </form>
      <Animation isActive={AnimationOpen} />
    </LoginFormWrapper>
  );
};
