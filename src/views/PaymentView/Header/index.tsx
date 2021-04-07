import Lottie from "react-lottie";
import paymentAnimation from "../../../animations/payment.json";

import { Container, Header, Title } from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: paymentAnimation,
};

export function PaymentHeader() {
  return (
    <>
      <Container>
        <Header>
          <div>
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>

          <Title>Payment Time!</Title>
        </Header>
      </Container>
    </>
  );
}
