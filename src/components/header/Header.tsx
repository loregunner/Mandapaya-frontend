import {
  Container,
  HeaderWrapper,
  BackButton,
  LogoGroup,
  Divider,
  Logo,
  NequiLogo,
} from '@/style/NequiTransaction.style';
import { ArrowLeft } from 'lucide-react';


export const Header = ({ handleGoBack }: { handleGoBack: () => void }) => (
  <Container>
    <HeaderWrapper>
      <BackButton onClick={handleGoBack}>
        <ArrowLeft />
        Volver
      </BackButton>
      <LogoGroup>
        <Logo
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20VERSION-color-RsxqApnGge5inzt3YgQqwx6t4Qt1jo.png"
          alt="MandaPaya Logo"
        />
        <Divider />
        <NequiLogo
          src="https://logosenvector.com/logo/img/nequi-37254.png"
          alt="Nequi Logo"
        />
      </LogoGroup>
    </HeaderWrapper>
  </Container>
);
