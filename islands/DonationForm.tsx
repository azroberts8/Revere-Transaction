import { useSignal } from "@preact/signals";
import DonationAmountForm from "./DonationAmountForm.tsx";
import DonorDetailsForm from "./DonorDetailsForm.tsx";
import DonorAddressform from "./DonorAddressForm.tsx";

const loadDonationAmount = () => console.log("Loading donation amount page");
const loadDonorDetails = () => console.log("Loading donor details!");
const loadAddressForm = () => console.log("Loading address form");
const loadConfirmationForm = () => console.log("Loading confirmation form");

export default function DonationForm() {
    const frequency = useSignal("once");
    const donationAmount = useSignal(110);
    const firstName = useSignal("");
    const lastName = useSignal("");
    const email = useSignal("");
    const phone = useSignal("");
    const address = useSignal("");
    const unit = useSignal("");
    const city = useSignal("");
    const state = useSignal("");
    const zipcode = useSignal("");
    const country = useSignal("US");
    return (
        // <DonationAmountForm
        //     frequency={frequency}
        //     donationAmount={donationAmount}
        //     submit={loadDonorDetails} />
        // <DonorDetailsForm
        //     firstName={firstName}
        //     lastName={lastName}
        //     email={email}
        //     phone={phone}
        //     back={loadDonationAmount}
        //     submit={loadAddressForm}/>
        <DonorAddressform
            address={address}
            unit={unit}
            city={city}
            state={state}
            zipcode={zipcode}
            country={country}
            back={loadDonorDetails}
            submit={loadConfirmationForm} />
    );
}