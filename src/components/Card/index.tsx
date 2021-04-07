import { Container } from "./styles";

export type CardProps = {
  children: React.ReactNode;
  minWidth?: number;
  style?: React.CSSProperties;
};

export function Card({ children, minWidth, style }: CardProps) {
  return (
    <Container minWidth={minWidth} style={style}>
      {children}
    </Container>
  );
}
