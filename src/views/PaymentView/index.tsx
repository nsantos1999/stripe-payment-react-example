import React from "react";
import { PaymentCard } from "./PaymentCard";
import { PaymentDetail } from "./PaymentDetail";

import { PaymentHeader } from "./Header";

import { Container, Content } from "./styles";

export function PaymentView() {
  return (
    <Container>
      <PaymentHeader />
      <Content>
        <PaymentCard />
        <PaymentDetail />
      </Content>
    </Container>
  );
}
