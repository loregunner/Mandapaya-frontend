import React from "react";
import Link from "next/link";
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  LogoWrapper,
  TextWrapper,
} from "./Footer.style";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <LogoWrapper>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20VERSION-color-RsxqApnGge5inzt3YgQqwx6t4Qt1jo.png"
              alt="Mandapayá Logo"
              width={200}
              height={50}
            />
          </LogoWrapper>
          <TextWrapper>
            <p>© {new Date().getFullYear()} Mandapayá. Todos los derechos reservados.</p>
            <div className="links">
              <Link href="/terminos">Términos y Condiciones</Link>
              <Link href="/privacidad">Política de Privacidad</Link>
              <Link href="/contacto">Contacto</Link>
            </div>
          </TextWrapper>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
