import Button from "@/ui/button/Button";
import Input from "@/ui/input/Input";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Icon,
  StyledTextarea,
  TextareaWrapper,
  WrapperContactForm,
} from "./ContactForm.style";
import { FiMessageSquare, FiSend } from "react-icons/fi";

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <WrapperContactForm>
      <div className="gradient-circle-1"></div>
      <div className="gradient-circle-2"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Envíanos un mensaje</h3>
        <div className="form_initial">
          <Input
            type="text"
            label={""}
            registerName={"name"}
            placeholder="Tu nombre"
            register={register}
          />
          <Input
            type="text"
            label={""}
            registerName={"email"}
            placeholder="tu@email.com"
            register={register}
          />
        </div>
        <Input
          type="text"
          label={""}
          registerName={"about"}
          placeholder="Asunto"
          register={register}
        />
        <TextareaWrapper>
          <Icon>
            <FiMessageSquare size={20} />
          </Icon>
          <StyledTextarea rows={8} placeholder="Tu mensaje" />
        </TextareaWrapper>
        <div className="button-wrapper">
          <Button size={"extralarge"} color={"primary"} type={"submit"}>
            <span>Enviar mensaje</span>
            <FiSend size={20} />
          </Button>
        </div>
      </form>
    </WrapperContactForm>
  );
};
