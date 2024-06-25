import { Signal, computed } from "@preact/signals";

interface CurrencyInputParams {
  name: string;
  label?: string;
  value: Signal<number>;
}

export default function CurrencyInput({ name, label, value }: CurrencyInputParams) {
  const display = computed(() => value.value.toLocaleString("en-US"));
  return(
    <div class="h-14 flex items-center overflow-hidden border-x border-t border-gray-800 last:border-b first:rounded-t-lg last:rounded-b-lg relative">
      <div class="inline text-base pl-3 pr-1.5 py-4">$</div>
      <input 
        type="text"
        id={name}
        name={name}
        value={display}
        placeholder=" "
        onInput={ (e) => {
            value.value = Number(e.currentTarget.value.replace(/\D/g, ''));
            e.currentTarget.value = value.value.toLocaleString("en-US");
        } }
        class="text-input inlinew-full py-3 text-xl focus:border-none outline-none" />
    </div>
  )
}