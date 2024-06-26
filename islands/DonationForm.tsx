import { useSignal } from "@preact/signals";
import DonationAmountForm from "./DonationAmountForm.tsx";
import DonorDetailsForm from "./DonorDetailsForm.tsx";
import DonorAddressform from "./DonorAddressForm.tsx";

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
    const activeForm = useSignal(0);
    const increment = () => activeForm.value++;
    const decrement = () => activeForm.value--;
    return (
        <>
            <div class={ `form ${activeForm == 0 ? 'active' : 'past'}` }>
                <DonationAmountForm
                frequency={frequency}
                donationAmount={donationAmount}
                submit={increment} />
            </div>
            <div class={ `form ${activeForm < 1 ? 'future' : activeForm > 1 ? 'past' : 'active'}` }>
                <DonorDetailsForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    back={decrement}
                    submit={increment}/>
            </div>
            <div class={ `form ${activeForm < 2 ? 'future' : activeForm > 2 ? 'past' : 'active'}` }>
                <DonorAddressform
                    address={address}
                    unit={unit}
                    city={city}
                    state={state}
                    zipcode={zipcode}
                    country={country}
                    back={decrement}
                    submit={increment} />
            </div>
        </>
    );
}