/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction, useState } from "react";
import { LogoutWrapper } from "./Logout.style";
import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";

interface ILogout {
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
  dataUser: any;
}

export const Logout = ({ setPopupOpen, dataUser }: ILogout) => {
  const [showLogout, setShowLogout] = useState(false);
  const firstCharacter = dataUser.user_name.charAt(0);
  return (
    <LogoutWrapper>
      <div className="logout">
        <div className="circle_name" onClick={() => setShowLogout(!showLogout)}>
          {firstCharacter}
        </div>
        {showLogout && (
          <div className="container_logout">
            <div className="logout_header">
              <p>
                <b>Nombre:</b> {dataUser.user_name}
              </p>
              <p>
                <b>Email:</b>
                <br />
              </p>
              <p>
                <span style={{ display: "block" }}>{dataUser.user_email}</span>
              </p>
              <a href="">Editar perfil</a>
            </div>
            <div className="logout_section" onClick={() => setPopupOpen(true)}>
              <Image src={LibsSVG.logout} alt={"logout"} />
              <p>Cerrar sesión</p>
            </div>
          </div>
        )}
      </div>
    </LogoutWrapper>
  );
};
