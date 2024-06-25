import { Signal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface DropDownSelectorParams {
  name: string;
  label?: string;
  value: Signal<string>;
  children?: ComponentChildren;
}

export default function DropDownSelector({ name, label, value, children }: DropDownSelectorParams) {
  return(
    <div class="h-14 overflow-hidden border-x border-t border-gray-800 last:border-b first:rounded-t-lg last:rounded-b-lg relative">
      <select
      id={name}
      name={name}
      value={value}
      onInput={ (e) => value.value = e.currentTarget.value }
      class="appearance-none text-input w-full px-3 pt-6 pb-2.5 bg-white text-base focus:border-none outline-none">
        { children }
      </select>
      <label 
        for={name}
        class="text-slate-500 transition-transform transition-100 absolute origin-top-left top-1/2 left-3 -translate-y-1/2"
      >{ label ? label : "" }</label>
    </div>
  )
}