/* eslint-disable @typescript-eslint/no-redeclare */
import { TypesLibsSVG } from "./models";
import logout from "../images/homepage/logout.svg";
import close from "../images/modal/close.svg";
import error from "../images/modal/error.svg";
import check from "../images/modal/check.svg";
import checkAlert from "../images/modal/checkAlert.svg";
import errorAlert from "../images/modal/errorAlert.svg";

export const LibsSVG = {
  error,
  check,
  close,
  logout,
  checkAlert,
  errorAlert
};

export type TypesLibsSVG = keyof typeof LibsSVG;
