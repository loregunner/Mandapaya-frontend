import React from "react";

import { LibsSVG } from "@/utils/libsSVG";

import Image from "next/image";
import { WrapperAlert } from "./Alert.style";



interface IAlert {
  message: string;
  type: "error" | "exitoso";
  isActive: boolean;
}

const Alert = ({ message, isActive, type }: IAlert) => {
  return (
    <WrapperAlert
      $isActive={isActive}
      $type={type}
      data-testid="alert_test">
      {type === "error" ? (
        <Image src={LibsSVG.errorAlert} alt="error" />
      ) : (
        <Image src={LibsSVG.checkAlert} alt="check" />
      )}
      <span>{message}</span>
    </WrapperAlert>
  );
};

export default Alert;
