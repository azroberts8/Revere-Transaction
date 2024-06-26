import { useSignal } from "@preact/signals";
import DonationAmountForm from "./DonationAmountForm.tsx";

const loadDonorDetails = () => console.log("Loading donor details!");

export default function DonationForm() {
    const frequency = useSignal("once");
    const donationAmount = useSignal(110);
    return (
        <DonationAmountForm
            frequency={frequency}
            donationAmount={donationAmount}
            submit={loadDonorDetails} />
    );
}