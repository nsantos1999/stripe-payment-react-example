import Lottie from "react-lottie";
import creditCard from "../../../animations/credit-card.json";
import { Card } from "../../../components/Card";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import { Content, Footer, Header, RowContainer, Title } from "./styles";
import { InputContainer } from "../../../components/InputContainer";
import { Button } from "../../../components/Button";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: creditCard,
};

export function PaymentCard() {
  return (
    <Card minWidth={600}>
      {/* <Container> */}
      <Header>
        <div>
          <Lottie options={defaultOptions} width={100} />
        </div>

        <Title color="#268DF8">Credit Card</Title>
      </Header>
      {/* </Container> */}
      <Content>
        <InputContainer title="Número do cartão" fullWidth>
          <CardNumberElement />
        </InputContainer>
        <RowContainer>
          <InputContainer title="Data de expiração" fullWidth>
            <CardExpiryElement />
          </InputContainer>

          <InputContainer title="CVC" fullWidth>
            <CardCvcElement />
          </InputContainer>
        </RowContainer>
      </Content>
      <Footer>
        <Button color="#268DF8" fullWidth>
          Confirmar
        </Button>
      </Footer>
    </Card>
  );
}
