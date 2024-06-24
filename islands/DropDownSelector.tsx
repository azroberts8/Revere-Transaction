import { Signal } from "@preact/signals";

export interface SelectorParams {
    value: string | number;
    label?: string;
}

export interface SelectorGroup {
  title: string;
  options: SelectorParams[];
}

interface DropDownSelectorParams {
  name: string;
  label?: string;
  value: Signal<string>;
  options: (SelectorParams | SelectorGroup)[];
}

export default function DropDownSelector({ name, label, value, options }: DropDownSelectorParams) {
  return(
    <div class="h-14 overflow-hidden border-x border-t border-gray-800 last:border-b first:rounded-t-lg last:rounded-b-lg relative">
      <select
      id={name}
      name={name}
      value={value}
      onInput={ (e) => value.value = e.currentTarget.value }
      class="appearance-none text-input w-full px-3 pt-6 pb-2.5 bg-white text-base focus:border-none outline-none">
        { options.map(option => {
          if("title" in option) {
            return (<optgroup label={option.title}>
              { option.options.map(sub => (
                <option value={sub.value}>{ sub.label ? sub.label : sub.value }</option>
              )) }
            </optgroup>)
          } else {
            return (<option value={option.value}>{ option.label ? option.label : option.value }</option>)
          }
        }) }
      </select>
      <label 
        for={name}
        class="text-slate-500 transition-transform transition-100 absolute origin-top-left top-1/2 left-3 -translate-y-1/2"
      >{ label ? label : "" }</label>
    </div>
  )
}