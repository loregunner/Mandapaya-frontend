/* eslint-disable @typescript-eslint/no-redeclare */
import { TypesLibsSVG } from "./models";
import close from "../images/modal/close.svg";
import error from "../images/modal/error.svg";
import check from "../images/modal/check.svg";

export const LibsSVG = {
  error,
  check,
  close
};

export type TypesLibsSVG = keyof typeof LibsSVG;
