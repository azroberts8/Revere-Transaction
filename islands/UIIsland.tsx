import { useSignal } from "@preact/signals";
import RadioSelector from "./RadioSelector.tsx";
import TextInput from "./TextInput.tsx";

export default function UIIsland() {
    const value = useSignal("dogs");
    const options = [
        { value: "cats", label: "🐈 | Cats" },
        { value: "dogs", label: "🐕 | Dogs" }
    ];
    return (
        <>
            <RadioSelector<string> name="testSelector" options={options} value={value} />
            <TextInput name="testText" value={value} />
            <div>Value is { value }</div>
        </>
    );
}