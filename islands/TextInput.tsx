import { Signal } from "@preact/signals";

interface TextInputParams {
  name: string;
  label?: string;
  value: Signal<string>;
}

export default function TextInput({ name, label, value }: TextInputParams) {
  return(
    <div class="h-14 overflow-hidden border-x border-b border-gray-800 first:border-t first:rounded-t-lg last:rounded-b-lg relative">
      <input 
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder=" "
        onInput={ (e) => value.value = e.currentTarget.value }
        class="text-input w-full px-3 pt-6 pb-2.5 text-base" />
      <label 
        for={name}
        class="text-slate-500 transition-transform transition-100 absolute origin-top-left top-1/2 left-3 -translate-y-1/2"
      >{ label ? label : "" }</label>
    </div>
  )
}