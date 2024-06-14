import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <body>
        <h1 class="text-3xl font-extrabold">Test Revere Payment Page</h1>
        <div id="reverePayForm"></div>
        <button id="submitPayment">Submit Payment</button>
      </body>
      <script src="https://cdn.jsdelivr.net/npm/@revere_payments/tokenizer/dist/umd/main.js"></script>
      <script src="./main.js"></script>
    </>
  );
}
