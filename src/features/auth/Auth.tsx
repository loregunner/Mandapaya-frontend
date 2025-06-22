/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  LeftSection,
  LogoWrapper,
  RightSection,
  TabButton,
  Tabs,
  TextToggle,
} from "./Auth.style";

import bgauth from "../../images/auth/auth-bg.png";

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
import { userEmail, userPassword, userToken } from "@/api/Auth";
import useAnimation from "@/hooks/useAnimation";
import Animation from "@/ui/animation/Animation";
import { useAlert } from "@/hooks/useAlert";
import Alert from "@/ui/alert/Alert";

const Auth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rememberSchema) as any,
  });

  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const { isActive, message, type, openAlert } = useAlert();
  const [popupOpen, setPopupOpen] = usePopup(false);
  const [modalOpen, setModalOpen] = useModal(false);
  const [AnimationOpen, setAnimationOpen, toggleAnimation] =
    useAnimation(false);

  const [step, setStep] = useState<4 | 5 | 6>(4);
  const [userId, setUserId] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    toggleAnimation();

    if (step === 4) {
      const response = await userEmail({ t: 4, username: data.email });
      response()
        .then((resp: any) => {
          setUserId(resp.data.userid);
          setStep(5);
          setAnimationOpen(false);
        })
        .catch(() => {
          openAlert("Error validando el correo", "error");
          setAnimationOpen(false);
        });
    }

    if (step === 5 && userId) {
      console.log(userId);
      
      const response = await userToken({
        t: 5,
        token: data.token,
        userid: userId,
      });
      response()
        .then(() => {
          setStep(6);
          setAnimationOpen(false);
        })
        .catch(() => {
          openAlert("Token inválido", "error");
          setAnimationOpen(false);
        });
    }

    if (step === 6 && userId) {
      const response = await userPassword({
        t: 6,
        password: data.newpassword,
        userid: userId,
      });
      response()
        .then(() => {
          openAlert("Contraseña actualizada", "exitoso");
          setModalOpen(false);
          setStep(4);
          reset();
          setUserId(null);
          setAnimationOpen(false);
        })
        .catch(() => {
          openAlert("Error al cambiar contraseña", "error");
          setAnimationOpen(false);
        });
    }
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
        handleClose={() => setPopupOpen(false)}
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
          setUserId(null);
          setStep(4);
          reset();
        }}>
        <form className="form_modal" onSubmit={handleSubmit(onSubmit)}>
          {step === 4 && (
            <Input
              type="text"
              label="Correo electrónico"
              registerName="email"
              placeholder="tu@email.com"
              register={register}
              errors={errors.email?.message}
            />
          )}

          {step === 5 && (
            <Input
              type="text"
              label="Código de verificación"
              registerName="token"
              placeholder="123456"
              register={register}
              errors={errors.token?.message}
            />
          )}

          {step === 6 && (
            <Input
              type="password"
              label="Nueva contraseña"
              registerName="newpassword"
              placeholder="********"
              register={register}
              errors={errors.newpassword?.message}
            />
          )}

          <div className="container_buttons">
            <Button
              size="large"
              color="error"
              type="button"
              onActionButton={() => {
                setModalOpen(false);
                setStep(4);
                setUserId(null);
                reset();
              }}>
              <span>Cancelar</span>
            </Button>
            <Button size="large" color="primary" type="submit">
              <span>
                {step === 4 && "Enviar correo"}
                {step === 5 && "Validar token"}
                {step === 6 && "Cambiar contraseña"}
              </span>
            </Button>
          </div>
        </form>
      </Modal>

      <Animation isActive={AnimationOpen} />
      <Alert isActive={isActive} message={message} type={type} />
    </Container>
  );
};

export default Auth;
