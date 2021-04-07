import { Typography } from "../../../../../styles/text";
import { Container } from "./styles";

type OrderItemProps = {
  productName: string;
  price: number;
};

export function OrderItem({ productName, price }: OrderItemProps) {
  return (
    <Container>
      <Typography color="#fff">{productName}</Typography>
      <Typography color="#fff" bold>
        ${price}
      </Typography>
    </Container>
  );
}
