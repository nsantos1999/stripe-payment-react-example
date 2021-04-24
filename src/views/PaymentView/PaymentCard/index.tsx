import Lottie from "react-lottie";
import creditCard from "../../../animations/credit-card.json";
import { Card } from "../../../components/Card";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { Content, Footer, Header, RowContainer, Title } from "./styles";
import { InputContainer } from "../../../components/InputContainer";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useForm } from "react-hook-form";
import { PaymentUser } from "../../../types/payment";
import { useCallback } from "react";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: creditCard,
};

export function PaymentCard() {
  const stripe = useStripe();
  const elements = useElements();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentUser>();

  const onSubmit = useCallback(
    async (paymentUserData: PaymentUser) => {
      const { name, email } = paymentUserData;
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      const cardNumberElement = elements.getElement(CardNumberElement);

      if (!cardNumberElement) return;

      const payload = await stripe.createPaymentMethod({
        billing_details: {
          name,
          email,
        },
        type: "card",
        card: cardNumberElement,
      });

      console.log(payload);
    },
    [stripe, elements]
  );

  return (
    <Card minWidth={600}>
      {/* <Container> */}
      <Header>
        <div>
          <Lottie options={defaultOptions} width={100} />
        </div>
        <Title color="#268DF8">Credit Card</Title>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <Input
            title="Nome"
            placeholder="João Silva..."
            {...register("name", { required: true })}
          />
          <Input
            title="Mail"
            type="mail"
            placeholder="example@mail.com"
            {...register("email", { required: true })}
          />
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
          <Button color="#268DF8" type="submit" fullWidth>
            Confirmar
          </Button>
        </Footer>
      </form>
    </Card>
  );
}
