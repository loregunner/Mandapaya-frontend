import { alertType } from "@/utils/interfaces";
import React from "react";

export const useAlert = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState<alertType>("error");

  React.useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [isActive]);

  const openAlert = (msg: string, type: "error" | "exitoso") => {
    setMessage(msg);
    setIsActive(true);
    setType(type);
  };

  return { isActive, message, openAlert, type };
};
