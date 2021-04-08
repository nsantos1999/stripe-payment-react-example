import Lottie from "react-lottie";
import creditCard from "../../../animations/credit-card.json";
import { Card } from "../../../components/Card";
import { CardElement } from "@stripe/react-stripe-js";

import { Content, Header, Title } from "./styles";

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
        <CardElement
          options={{
            iconStyle: "solid",
            style: {
              base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": {
                  color: "#fce883",
                },
                "::placeholder": {
                  color: "#87bbfd",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </Content>
    </Card>
  );
}
