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

const Auth = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

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

          <div>{activeTab === "login" ? <LoginForm /> : <RegisterForm />}</div>

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
    </Container>
  );
};

export default Auth;
