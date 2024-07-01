import { Signal } from "@preact/signals";
import TabSelector from "./TabSelector.tsx";
import RadioSelector from "./RadioSelector.tsx";
import CurrencyInput from "./CurrencyInput.tsx";
import { Button } from "../components/Button.tsx";

interface DonationAmountFormParams {
  frequency: Signal<string>;
  donationAmount: Signal<number>;
  submit: () => void;
}

export default function DonationAmountForm({
  frequency,
  donationAmount,
  submit
}: DonationAmountFormParams) {
  const frequencyOptions = [
    { value: "once", label: "Give Once" },
    { value: "monthly", label: "❤️ Monthly" }
  ];
  const singleAmountOptions = [
    { value: 1000, label: "$1,000" },
    { value: 500, label: "$500" },
    { value: 300, label: "$300" },
    { value: 100, label: "$100" },
    { value: 50, label: "$50" },
    { value: 25, label: "$25" }
  ];
  const monthlyAmountOptions = [
    { value: 250, label: "$250" },
    { value: 150, label: "$150" },
    { value: 100, label: "$100" },
    { value: 40, label: "$40" },
    { value: 25, label: "$25" },
    { value: 15, label: "$15" }
  ];
  const amountOptions = frequency == "once" ? singleAmountOptions : monthlyAmountOptions;
  return (
    <div class="p-7 h-full flex flex-col bg-white">
      <div class="h-full">
        <TabSelector name="frequencySelector" options={frequencyOptions} value={frequency} />
        <div class="pt-5">
          <RadioSelector name="amountSelector" options={amountOptions} value={donationAmount} />
        </div>
        <div class="pt-3">
          <CurrencyInput name="amountInput" value={donationAmount} />
        </div>
      </div>
      <div>
        <Button onClick={submit}>Donate</Button>
      </div>
    </div>
  );
}