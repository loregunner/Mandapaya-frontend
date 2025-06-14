/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";

import Image from "next/image";

import bgauth from "../../images/auth/auth-bg.png";

import {
  Container,
  LeftSection,
  LogoWrapper,
  RightSection,
  TabButton,
  Tabs,
  TextToggle,
} from "./Auth.style";
import { LoginForm } from "@/components/loginForm/LoginForm";
import { RegisterForm } from "@/components/registerForm/RegisterForm";
import usePopup from "@/hooks/usePopup";
import Popup from "@/ui/popup/Popup";
import { Modal } from "@/ui/modal/Modal";
import useModal from "@/hooks/useModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { rememberSchema } from "@/components/registerForm/RegisterForm.utils";
import Input from "@/ui/input/Input";
import Button from "@/ui/button/Button";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rememberSchema) as any,
  });
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [popupOpen, setPopupOpen, togglePopup] = usePopup(false);
  const [modalOpen, setModalOpen, toggle] = useModal(false);

  const onSubmit = async (data: any) => {
    const userDataLogin = {
      t: 1,
      username: data.email,
    };
    // const response = await userAuthentication(userDataLogin);
    // response()
    //   .then((resp: any) => {})
    //   .catch((err: any) => {
    //     console.error("Login failed:", err);
    //   });
  };

  return (
    <Container>
      <LeftSection>
        <Image
          src={bgauth}
          alt="Personas felices enviando remesas con Mandapaya"
          width={300}
          height={100}
        />
      </LeftSection>

      <RightSection>
        <div>
          <LogoWrapper>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20VERSION-color-RsxqApnGge5inzt3YgQqwx6t4Qt1jo.png"
              alt="Mandapayá Logo"
              width={300}
              height={100}
            />
          </LogoWrapper>

          <Tabs>
            <TabButton
              onClick={() => setActiveTab("login")}
              $tabs={activeTab === "login"}>
              Iniciar sesión
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("register")}
              $tabs={activeTab === "register"}>
              Registrarse
            </TabButton>
          </Tabs>

          <div>
            {activeTab === "login" ? (
              <LoginForm setModalOpen={setModalOpen} />
            ) : (
              <RegisterForm setPopup={setPopupOpen} />
            )}
          </div>

          <TextToggle>
            {activeTab === "login" ? (
              <>
                ¿No tienes una cuenta?
                <button onClick={() => setActiveTab("register")}>
                  Regístrate aquí
                </button>
              </>
            ) : (
              <>
                ¿Ya tienes una cuenta?
                <button onClick={() => setActiveTab("login")}>
                  Inicia sesión
                </button>
              </>
            )}
          </TextToggle>
        </div>
      </RightSection>
      <Popup
        title="¡Registro exitoso!"
        isActive={popupOpen}
        handleClose={() => {
          setPopupOpen(false);
        }}
        message={`Tu cuenta ha sido creada correctamente. Te estamos redirigiendo al inicio de sesión para que accedas con tus credenciales.`}
        accept={() => {
          setActiveTab("login");
          setPopupOpen(false);
        }}
      />
      <Modal
        title="Recupera la contraseña"
        isActive={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}>
        <form className="form_modal" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label={"Correo electrónico"}
            registerName={"email"}
            placeholder="tu@email.com"
            register={register}
            errors={errors.email?.message}
          />
          <Input
            type="password"
            label={"Nueva contraseña"}
            registerName={"newpassword"}
            placeholder="*********"
            register={register}
            errors={errors.newpassword?.message}
          />
          <div className="container_buttons">
            <Button
              size={"small"}
              color={"error"}
              type={"button"}
              onActionButton={() => setModalOpen(false)}>
              <span>Cancelar</span>
            </Button>
            <Button size={"small"} color={"primary"} type={"submit"}>
              <span>Enviar</span>
            </Button>
          </div>
        </form>
      </Modal>
    </Container>
  );
};

export default Auth;
