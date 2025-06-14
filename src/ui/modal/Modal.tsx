import React, { ReactNode } from "react";

import Image from "next/image";

import { LibsSVG } from "@/utils/libsSVG";
import { Hr, WrapperModal } from "./Modal.style";

interface Props {
  children: ReactNode;
  title: string;
  isActive: boolean;
  close?: boolean;
  sizeModal?: string;
  handleClose: () => void;
}

export const Modal = ({
  children,
  title,
  isActive,
  close,
  sizeModal,
  handleClose,
}: Props) => {
  return (
    <WrapperModal
      $isActive={isActive}
      sizeModal={sizeModal}
      data-testid="modal_test">
      <div className="container_modal">
        <div className="header_modal">
          <p className="header_title">{title}</p>
          {!close && (
            <Image src={LibsSVG.close} alt="close" onClick={handleClose} />
          )}
        </div>
        <Hr />
        {children}
      </div>
    </WrapperModal>
  );
};
