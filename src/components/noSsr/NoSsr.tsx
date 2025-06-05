"use-client"
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const NoSsr = ({ children }: IProps) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
