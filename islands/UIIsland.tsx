import { useSignal } from "@preact/signals";
import RadioSelector from "./RadioSelector.tsx";
import TextInput from "./TextInput.tsx";

export default function UIIsland() {
    const value = useSignal("5000");
    const options = [
        { value: "100000", label: "$1,000" },
        { value: "50000", label: "$500" },
        { value: "20000", label: "$200" },
        { value: "15000", label: "$150" },
        { value: "10000", label: "$100" },
        { value: "5000", label: "$50" }
    ];
    return (
        <div class="w-96">
            <RadioSelector name="testSelector" options={options} value={value} />
            <TextInput name="testText" value={value} />
            <div>Value is { value }</div>
        </div>
    );
}