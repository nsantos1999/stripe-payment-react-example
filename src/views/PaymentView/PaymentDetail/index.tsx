import { Card } from "../../../components/Card";
import { Divisor } from "../../../styles/divisor";
import { Title, Typography } from "../../../styles/text";
import { OrderList } from "./OrderList";
import { Container, Header } from "./styles";

export function PaymentDetail() {
  return (
    <Card minWidth={600}>
      <Container>
        <Header>
          <Title color="#fff">Shopping Cart</Title>
        </Header>
        <Divisor />
        <OrderList />
        <Divisor />
      </Container>
    </Card>
  );
}
