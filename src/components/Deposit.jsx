import { useDepositContext } from "../AmountProvider";

export default function Deposit() {
  const Deposit = useDepositContext();
  return (
    <div>
      <button onClick={Deposit}>Deposit $1</button>
    </div>
  );
}
