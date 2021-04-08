import { loadStripe } from "@stripe/stripe-js";
import { GlobalStyle } from "./styles/globalStyles";
import { PaymentView } from "./views/PaymentView";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_kEY);

function App() {
  return (
    <>
      <GlobalStyle />
      <Elements stripe={stripePromise}>
        <PaymentView />
      </Elements>
    </>
  );
}

export default App;
