import { AmountProvider } from "./AmountProvider";
import Amount from "./components/Amount";
import Deposit from "./components/Deposit";
export default function App() {
  return (
    <AmountProvider>
      <div>
        <Amount />
        <Deposit />
      </div>
    </AmountProvider>
  );
}
