import { useSignal } from "@preact/signals";
import RadioSelector from "./RadioSelector.tsx";
import TextInput from "./TextInput.tsx";
import CurrencyInput from "./CurrencyInput.tsx";
import TabSelector from "./TabSelector.tsx";
import DropDownSelector from "./DropDownSelector.tsx";

export default function UIIsland() {
    const frequency = useSignal("once");
    const value = useSignal(1000);
    const fname = useSignal("");
    const lname = useSignal("");
    const state = useSignal("");
    const options = [
        { value: 1000, label: "$1,000" },
        { value: 500, label: "$500" },
        { value: 200, label: "$200" },
        { value: 150, label: "$150" },
        { value: 100, label: "$100" },
        { value: 50, label: "$50" }
    ];
    const tabOptions = [
        { value: "once", label: "Give Once" },
        { value: "monthly", label: "Monthly" },
        { value: "annually", label: "Annually" }
    ];
    return (
        <div class="w-96 m-2">
            <TabSelector name="testTabs" options={tabOptions} value={frequency} />
            <div class="mt-3">
                <RadioSelector name="testSelector" options={options} value={value} />
            </div>
            <div class="mt-3">
                <TextInput name="fname" value={fname} label="First Name" />
                <TextInput name="lname" value={lname} label="Last Name" />
                <CurrencyInput name="donationAmount" value={value} label="Amount" />
                <DropDownSelector name="stateSelector" label="State" value={state} >
                    <optgroup label="States">
                        <option value="CA">California</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="TX">Texas</option>
                    </optgroup>
                    <optgroup label="Territories">
                        <option value="PR">Puerto Rico</option>
                        <option value="VI">Virgin Islands</option>
                    </optgroup>
                </DropDownSelector>
            </div>
            <div class="mt-3">
                <TextInput name="fname" value={fname} label="First Name" />
            </div>
            <div>Value is { value }</div>
            <div>Frequency is { frequency }</div>
            <div>State is { state }</div>
        </div>
    );
}