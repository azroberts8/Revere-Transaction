import { useSignal } from "@preact/signals";
import DonationAmountForm from "./DonationAmountForm.tsx";
import DonorDetailsForm from "./DonorDetailsForm.tsx";
import DonorAddressform from "./DonorAddressForm.tsx";
import DonationCCForm from "./DonationCCForm.tsx";
import { SimpleReverePay } from 'npm:@revere_payments/tokenizer';
import type { SuccessResponse, ErrorResponse } from "npm:@revere_payments/tokenizer/types";

const merchantId = 'a6ea44dc-435d-44bf-b3d8-874632e922db';
const publicAPIKey = '2hCbBHOSfiTgA9lCyPi3OlGIfP9.30650230572fde2f0034ab1048e81590d96df27259748da347f76cfcfcbb39651390901abd15945619be42db36eccd5d501459650231009295d7e2c881cbdb12e763ca2aabdb6c4c08dbd6a142e13c2ee640eb93e705876a7291e6a15ea7b31ad4289e7f799c07';
let reverePay: SimpleReverePay;

const revereInit = () => {
    console.log("Called");
    reverePay = new SimpleReverePay({
        merchantId: merchantId,
        publicAPIKey: publicAPIKey,
        config: {
            paymentMethods: ['card'],
            sandbox: true
        }
    });
    
    reverePay.onSuccess = (res: SuccessResponse) => {
        console.log("Success!");
        console.log(res);
    }
    
    reverePay.onError = (res?: ErrorResponse) => {
        console.log("ERROR!");
        console.log(res);
    }
}

export default function DonationForm() {
    const submit = () => {
        //reverePay.submit();
        console.log("Submitted Details");
    };
    
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
    const advance = () => activeForm.value++;
    const back = () => activeForm.value--;
    const advanceFirstPage = () => {
        if(!reverePay) revereInit();
        advance();
    }
    return (
        <>
            <div class={ `form ${activeForm == 0 ? 'active' : 'past'}` }>
                <DonationAmountForm
                frequency={frequency}
                donationAmount={donationAmount}
                submit={advanceFirstPage} />
            </div>
            <div class={ `form ${activeForm < 1 ? 'future' : activeForm > 1 ? 'past' : 'active'}` }>
                <DonorDetailsForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    back={back}
                    submit={advance}/>
            </div>
            <div class={ `form ${activeForm < 2 ? 'future' : activeForm > 2 ? 'past' : 'active'}` }>
                <DonorAddressform
                    address={address}
                    unit={unit}
                    city={city}
                    state={state}
                    zipcode={zipcode}
                    country={country}
                    back={back}
                    submit={advance} />
            </div>
            <div class={ `form ${activeForm < 3 ? 'future' : activeForm > 3 ? 'past' : 'active'}`} >
                <DonationCCForm
                    amount={donationAmount}
                    back={back}
                    submit={submit} />
            </div>
        </>
    );
}