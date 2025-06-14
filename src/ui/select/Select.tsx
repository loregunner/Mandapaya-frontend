/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { UseFormRegister } from "react-hook-form";
import { WrapperSelect } from "./Select.style";


interface ISelect {
  arrayView: Array<any>;
  label?: string | null;
  registerName: string;
  register: UseFormRegister<any>;
  errors?: any;
  option?: string;
  required?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Select = ({
  arrayView,
  label,
  register,
  registerName,
  errors,
  option,
  required,
  disabled,
  onClick,
}: ISelect) => {
  const sizeInput = registerName === "noApprove" ? 100 : 35;
  const truncate = (input: string) =>
    input?.length > sizeInput ? `${input.substring(0, sizeInput)}...` : input;
  return (
    <WrapperSelect
      disabled={disabled}
      register={registerName}
      $error={errors}
      data-testid="select_test">
      <label>{label}</label>
      <select
        required={required}
        disabled={disabled}
        onClick={onClick}
        className={registerName}
        id={registerName}
        {...register(registerName)}>
        <option value="">{option ?? "Seleccionar"}</option>
        {arrayView?.map((item, index) => (
          <option value={item.id} key={index + 1}>
            {truncate(item?.label)}
          </option>
        ))}
      </select>
      {errors && <div className="error_input">{errors}</div>}
    </WrapperSelect>
  );
};

export default Select;
