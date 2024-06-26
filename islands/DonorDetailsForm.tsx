import { Signal } from "@preact/signals";
import { Header } from "../components/Header.tsx";
import TextInput from "./TextInput.tsx";
import { Button } from "../components/Button.tsx";

interface DonorDetailsParams {
    firstName: Signal<string>;
    lastName: Signal<string>;
    email: Signal<string>;
    phone: Signal<string>;
    back: () => void;
    submit: () => void;
}

export default function DonorDetailsForm({
    firstName,
    lastName,
    email,
    phone,
    back,
    submit
}: DonorDetailsParams) {
    return(
        <div class="h-full flex flex-col">
            <Header title="Enter your details" backFn={back} />
            <div class="h-full p-7">
                <TextInput name="firstNameInput" label="First Name" value={firstName} />
                <TextInput name="lastNameInput" label="Last Name" value={lastName} />
                <TextInput name="emailInput" label="Email Address" value={email} />
                <TextInput name="phoneInput" label="Phone Number" value={phone} />
            </div>
            <div class="p-7">
                <Button onClick={submit}>Continue</Button>
            </div>
        </div>
    );
}