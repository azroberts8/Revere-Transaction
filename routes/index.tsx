import { DonationWindow } from "../components/DonationWindow.tsx";

export default function Home() {
  return(
    <>
      <div class="bg-slate-800 w-screen h-screen flex items-center justify-center">
        <DonationWindow />
      </div>
      <body>
        {/* <script src="https://cdn.jsdelivr.net/npm/@revere_payments/tokenizer/dist/umd/main.js"></script>
        <script src="./main.js" defer></script> */}
      </body>
    </>
  )
}