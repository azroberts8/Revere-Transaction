import { useSignal } from "@preact/signals";
import DonationAmountForm from "./DonationAmountForm.tsx";
import DonorDetailsForm from "./DonorDetailsForm.tsx";

const loadDonationAmount = () => console.log("Loading donation amount page");
const loadDonorDetails = () => console.log("Loading donor details!");
const loadAddressForm = () => console.log("Loading address form");

export default function DonationForm() {
    const frequency = useSignal("once");
    const donationAmount = useSignal(110);
    const firstName = useSignal("");
    const lastName = useSignal("");
    const email = useSignal("");
    const phone = useSignal("");
    return (
        // <DonationAmountForm
        //     frequency={frequency}
        //     donationAmount={donationAmount}
        //     submit={loadDonorDetails} />
        <DonorDetailsForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            back={loadDonationAmount}
            submit={loadAddressForm}/>
    );
}