/* eslint-disable @typescript-eslint/no-explicit-any */
import "./globals.css";
import "@/utils/fonts.css";

export const metadata = {
  title: "Mandapaya",
  description: "Envía remesas a Venezuela de forma rápida y segura",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
