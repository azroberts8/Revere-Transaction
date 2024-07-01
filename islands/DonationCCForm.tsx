import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

interface DonationCCParams {
    amount: number;
    back: () => void;
    submit: () => void;
}

export default function DonationCCForm({
    amount,
    back,
    submit
}: DonationCCParams) {
    return (
        <div class="h-full flex flex-col bg-white">
            <Header backFn={back}>Credit Card</Header>
            <div class="h-full p-7">
                <div id="reverePayForm"></div>
            </div>
            <div class="p-7">
                <Button onClick={submit}>Donate ${amount}</Button>
            </div>
        </div>
    );
}