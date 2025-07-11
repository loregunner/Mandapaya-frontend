/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import "./globals.css";
import "@/utils/fonts.css";
import Loading from "./loading";
import StyledComponentsRegistry from "@/config/register";
import ReduxProvider from "@/redux/provider";

export const metadata = {
  title: "Mandapaya",
  description: "Envía remesas a Venezuela de forma rápida y segura",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <title>Mandapaya</title>
      </head>
      <body className="layout" translate="no" suppressHydrationWarning={true}>
        <Suspense fallback={<Loading />}>
          <ReduxProvider>
            <StyledComponentsRegistry>
              <div>{children}</div>
            </StyledComponentsRegistry>
          </ReduxProvider>
        </Suspense>
      </body>
    </html>
  );
}
