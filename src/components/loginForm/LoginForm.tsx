/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { LoginFormWrapper } from "./LoginForm.style";
import Input from "@/ui/input/Input";
import { useForm } from "react-hook-form";
import Button from "@/ui/button/Button";
import { userAuthentication } from "@/api/Auth";

export const LoginForm = () => {
  const { register, handleSubmit, watch, reset, control } = useForm();

  const onSubmit = async (data: any) => {
    const response = await userAuthentication(data);
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
      <h2 className="title">Iniciar sesión</h2>
      <p className="subtitle">Ingresa tus datos para acceder a tu cuenta</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <p className="forget_password">¿Olvidaste tu contraseña?</p>
        <Button size={"fluid"} color={"primary"} type={"submit"}>
          <span>Iniciar sesión</span>
        </Button>
      </form>
    </LoginFormWrapper>
  );
};
