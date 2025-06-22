/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Image from "next/image";

import Button from "../button/Button";
import { LibsSVG } from "@/utils/libsSVG";
import { WrapperPopup } from "./Popup.style";

interface Props {
  message: string;
  title: string;
  isActive: boolean;
  close?: boolean;
  handleClose: () => void;
  accept: () => void;
  warning?: any;
}

const Popup = ({
  message,
  title,
  isActive,
  close,
  handleClose,
  accept,
  warning
}: Props) => {
  return (
    <WrapperPopup $isActive={isActive} data-testid="popup_test">
      <div className="container_modal">
        <div className="header_modal">
          <Image
            src={warning ? LibsSVG.error : LibsSVG.check}
            alt="accept"
            className="imgAccept"
            width={30}
            height={30}
          />
          {!close && (
            <Image
              src={LibsSVG.close}
              alt="close"
              onClick={handleClose}
              width={30}
              height={30}
            />
          )}
        </div>
        <div className="container_body">
          <p className="header_title">{title}</p>
          <p className="message">{message}</p>
          <div className="container_button">
            <Button
              type="button"
              color="error"
              size="small"
              onActionButton={handleClose}>
              <span>Cancelar</span>
            </Button>
            <Button
              type="button"
              onActionButton={accept}
              color="primary"
              size="small">
              <span>Continuar</span>
            </Button>
          </div>
        </div>
      </div>
    </WrapperPopup>
  );
};

export default Popup;
