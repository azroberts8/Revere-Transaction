import { useSignal } from "@preact/signals";
import RadioSelector from "./RadioSelector.tsx";
import TextInput from "./TextInput.tsx";
import { InputGroup } from "../components/InputGroup.tsx";
import CurrencyInput from "./CurrencyInput.tsx";

export default function UIIsland() {
    const value = useSignal(1000);
    const fname = useSignal("");
    const lname = useSignal("");
    const options = [
        { value: 1000, label: "$1,000" },
        { value: 500, label: "$500" },
        { value: 200, label: "$200" },
        { value: 150, label: "$150" },
        { value: 100, label: "$100" },
        { value: 50, label: "$50" }
    ];
    return (
        <div class="w-96 m-2">
            <RadioSelector name="testSelector" options={options} value={value} />
            <div class="mt-3">
                <TextInput name="fname" value={fname} label="First Name" />
                <TextInput name="lname" value={lname} label="Last Name" />
                <CurrencyInput name="donationAmount" value={value} label="Amount" />
            </div>
            <div class="mt-3">
                <TextInput name="fname" value={fname} label="First Name" />
            </div>
            <div>Value is { value }</div>
        </div>
    );
}