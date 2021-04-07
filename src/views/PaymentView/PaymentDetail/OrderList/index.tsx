import { OrderItem } from "./OrderItem";
import { Container } from "./styles";

export function OrderList() {
  return (
    <Container>
      <OrderItem productName="Game 1" price={99.99} />
      <OrderItem productName="Game 1" price={99.99} />
      <OrderItem productName="Game 1" price={99.99} />
      <OrderItem productName="Game 1" price={99.99} />
      <OrderItem productName="Game 1" price={99.99} />
    </Container>
  );
}
