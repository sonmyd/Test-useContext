import { useAmountContext } from "../AmountProvider";

export default function Amount() {
  const Amount = useAmountContext();

  return (
    <div>
      <h2>Componente Hijo</h2>
      {Amount}
    </div>
  );
}
