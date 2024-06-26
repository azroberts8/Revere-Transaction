import { DonationWindow } from "../components/DonationWindow.tsx";

export default function Home() {
  return(
    <>
      <div class="bg-slate-800 w-screen h-screen flex items-center justify-center">
        <DonationWindow />
      </div>
      <body></body>
    </>
  )
}