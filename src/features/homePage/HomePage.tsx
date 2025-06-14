"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  HomepageWrapper,
  BackgroundImage,
  Content,
  LogoContainer,
  Title,
  Description,
  CountrySelector,
  CountryButton,
  ImageInner,
  FeatureSection,
  FeatureCard,
  ContactSection,
} from "./HomePage.style";

import family from "@/images/homepage/family-background.png";

import { ArrowRight, Clock, Shield, FileText } from "lucide-react";
import Image from "next/image";
import { countries, countryImages } from "./HomePage.utils";
import Button from "@/ui/button/Button";
import { ContactForm } from "@/components/contactForm/ContactForm";
import Footer from "@/components/footer/Footer";

export default function Homepage() {
  const [selectedCountry, setSelectedCountry] = useState("venezuela");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  const changeCountry = (country: string) => {
    setIsChanging(true);
    setTimeout(() => setSelectedCountry(country), 150);
  };

  const getSelectedCountryName = () => {
    const country = countries.find((c) => c.id === selectedCountry);
    return country ? country.name : "Venezuela";
  };

  return (
    <HomepageWrapper>
      <BackgroundImage>
        <Image src={family} alt={"smile_family"} className="cover" />
        <Content>
          <div className="container_cover">
            <LogoContainer>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20VERSION-color-RsxqApnGge5inzt3YgQqwx6t4Qt1jo.png"
                alt="Mandapayá Logo"
                className="MandapayaLogo"
                width={400}
                height={70}
                style={{ objectFit: "cover" }}
              />
            </LogoContainer>
            <Title>
              Con Mandapayá envías giftcards que se redimen en emociones
            </Title>
            <Description>
              Transfiere tarjetas regalo de forma rápida, segura, con términos y
              condiciones transparentes.
            </Description>
            <Link href={`/home/${selectedCountry}`} className="button_gift">
              <Button size={"extralarge"} color={"primary"} type={"button"}>
                <span>¡Envía una Giftcard a {getSelectedCountryName()}!</span>
                <ArrowRight className="icon" />
              </Button>
            </Link>
            <CountrySelector>
              <p className="subtitle_buttons">Selecciona tu país:</p>
              <div className="buttons">
                {countries.map((country) => (
                  <CountryButton
                    key={country.id}
                    $isSelected={selectedCountry === country.id}
                    onClick={() => changeCountry(country.id)}>
                    {country.name}
                  </CountryButton>
                ))}
              </div>
            </CountrySelector>
          </div>
          <ImageInner $isChanging={isChanging}>
            <Image
              src={countryImages[selectedCountry]}
              alt={`Mandapayá en ${selectedCountry}`}
              className="w-full h-full object-fill rounded-[20px]"
            />
          </ImageInner>
        </Content>
      </BackgroundImage>
      <FeatureSection>
        <h2 className="title_subsection">¿Por qué amarás usar Mandapayá?</h2>
        <div className="container_cards">
          {[
            {
              icon: <Clock width={33} height={30} />,
              title: "Somos inmediatos, un segundo redime",
              description:
                "Envía valores en minutos con solo unos clics. Sin complicaciones ni largas esperas.",
            },
            {
              icon: <Shield width={33} height={30} />,
              title: "Seguro y Confiable",
              description:
                "Tus transacciones están protegidas con la más alta tecnología de seguridad.",
            },
            {
              icon: <FileText width={35} height={30} />,
              title: "Términos y Condiciones",
              description:
                "Conoce nuestros términos y políticas para una experiencia transparente y segura.",
              link: "/terminos",
            },
          ].map((card, idx) => (
            <FeatureCard key={idx}>
              <div className="card-inner">
                <div className="icon-wrapper">
                  <svg className="icon">{card.icon}</svg>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>
                {card.link && (
                  <Link href={card.link} className="custom-link">
                    Ver términos completos
                  </Link>
                )}
              </div>
            </FeatureCard>
          ))}
        </div>
      </FeatureSection>

      <ContactSection>
        <h2>Contáctanos</h2>
        <div>
          <ContactForm />
        </div>
      </ContactSection>

      <Footer />
    </HomepageWrapper>
  );
}
