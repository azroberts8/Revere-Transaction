import DonationForm from "../islands/DonationForm.tsx";

export function DonationWindow() {
    return (
        <div class="w-full h-full max-w-4xl max-h-[42rem] grid grid-cols-[auto_41%] gap-5">
            <div class="bg-white rounded-2xl">Hello</div>
            <div class="bg-white rounded-2xl">
                <DonationForm />
            </div>
        </div>
    );
}