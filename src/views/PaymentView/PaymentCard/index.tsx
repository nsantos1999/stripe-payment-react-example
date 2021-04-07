import Lottie from "react-lottie";
import creditCard from "../../../animations/credit-card.json";
import { Card } from "../../../components/Card";

import { Container, Header, Title } from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: creditCard,
};

export function PaymentCard() {
  return (
    <Card minWidth={600}>
      <Container>
        <Header>
          <div>
            <Lottie options={defaultOptions} width={100} />
          </div>

          <Title color="#268DF8">Credit Card</Title>
        </Header>
      </Container>
    </Card>
  );
}
