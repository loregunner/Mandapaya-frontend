/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Input from "@/ui/input/Input";
import { useForm } from "react-hook-form";
import Button from "@/ui/button/Button";
import { LoginFormWrapper } from "../loginForm/LoginForm.style";
import { userRegister } from "@/api/Auth";

export const RegisterForm = () => {
  const { register, handleSubmit, watch, reset, control } = useForm();
  const onSubmit = async (data: any) => {
    const requestBody = {
      t: 7,
      email: data.email,
      password: data.password,
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      address: data.address,
      idnumber: data.idnumber,
      identification_type: parseInt(data.identification_type),
      person_type: data.person_type,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      treatment: data.treatment,
    };
    const response = await userRegister(requestBody);
    response()
      .then((resp: any) => {
        console.log("Login successful:", resp.data);
      })
      .catch((err: any) => {
        console.error("Login failed:", err);
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
          />
          <Input
            type="text"
            label={"Apellido"}
            registerName={"lastName"}
            placeholder="Tu apellido"
            register={register}
          />
        </div>
        <Input
          type="text"
          label={"Correo electrónico"}
          registerName={"email"}
          placeholder="tu@email.com"
          register={register}
        />
        <Input
          type="password"
          label={"Contraseña"}
          registerName={"password"}
          placeholder="*********"
          register={register}
        />
        <Input
          type="text"
          label={"Teléfono"}
          registerName={"phone"}
          placeholder="3001234567"
          register={register}
        />
        <Button size={"fluid"} color={"primary"} type={"submit"}>
          <span>Continuar</span>
        </Button>
      </form>
    </LoginFormWrapper>
  );
};
