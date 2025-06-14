/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  InputCustom,
  InputWrapper,
  Label,
  TogglePassword,
} from "./Input.style";
import { inconsSelect } from "./Input.utils";

export interface Iinput {
  type: string;
  label: string;
  registerName: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors?: any;
  disabled?: boolean;
  required?: boolean;
  step?: any;
}

const Input = ({
  type,
  label,
  registerName,
  placeholder,
  register,
  errors,
  disabled,
  required,
  step,
}: Iinput) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = registerName === "password";

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputCustom
        placeholder={placeholder}
        {...register(registerName)}
        id={registerName}
        onWheel={(event) => event.currentTarget.blur()}
        type={isPassword && showPassword ? "text" : type}
        disabled={disabled}
        autoComplete="new-password"
        step={step}
        $error={errors !== undefined}
        required={required ?? false}
      />
      <i className="icon_input">{inconsSelect(registerName)}</i>
      {errors !== undefined ? (
        <div className="error_input">{errors}</div>
      ) : null}
      {isPassword && (
        <TogglePassword onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
        </TogglePassword>
      )}
    </InputWrapper>
  );
};

export default Input;
