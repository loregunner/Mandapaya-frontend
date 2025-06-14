import React from "react";
import { WrapperButton } from "./Button.style";
import { primaryColor } from "@/utils/constants.style";

export interface IButton {
  children: React.ReactNode;
  size: "small" | "large" | "extralarge" | "fluid";
  color:
    | "primary"
    | "disabled"
    | "none"
    | "error";
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onActionButton?: () => void;
}

const Button = ({
  color,
  size,
  children,
  type,
  disabled,
  onActionButton,
}: IButton) => {
  const buttonColor = {
    primary: primaryColor,
    error: "red",
    none: "transparent",
  };

  const buttonSize = {
    small: "102px",
    large: "136px",
    extralarge: "165px",
    fluid: "100%",
  };

  return (
    <WrapperButton
      $colorButton={disabled ? buttonColor["disabled"] : buttonColor[color]}
      $size={buttonSize[size]}
      type={type}
      disabled={disabled}
      onClick={onActionButton}
      data-testid="button_test">
      {children}
    </WrapperButton>
  );
};

export default Button;
