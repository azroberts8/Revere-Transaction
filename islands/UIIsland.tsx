import { useSignal } from "@preact/signals";
import RadioSelector from "./RadioSelector.tsx";
import TextInput from "./TextInput.tsx";
import { InputGroup } from "../components/InputGroup.tsx";

export default function UIIsland() {
    const value = useSignal("10000");
    const fname = useSignal("");
    const lname = useSignal("");
    const options = [
        { value: "100000", label: "$1,000" },
        { value: "50000", label: "$500" },
        { value: "20000", label: "$200" },
        { value: "15000", label: "$150" },
        { value: "10000", label: "$100" },
        { value: "5000", label: "$50" }
    ];
    return (
        <div class="w-96 m-2">
            <RadioSelector name="testSelector" options={options} value={value} />
            <div class="mt-3">
                <TextInput name="fname" value={fname} label="First Name" />
                <TextInput name="lname" value={lname} label="Last Name" />
                <TextInput name="testText" value={value} label="Amount" />
            </div>
            <div class="mt-3">
                <TextInput name="fname" value={fname} label="First Name" />
            </div>
            <div>Value is { value }</div>
        </div>
    );
}