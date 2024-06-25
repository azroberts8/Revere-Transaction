import { Signal } from "@preact/signals";

interface TabItemParams {
  value: string | number;
  label?: string;
}

interface TabSelectorParams {
  name: string;
  options: TabItemParams[];
  value: Signal;
}

export default function TabSelector({ name, options, value }: TabSelectorParams) {
  return(
    <div class="h-10 w-full flex">
      { options.map(({ value: optionValue, label }) => (
        <div class="tab-selector h-10 w-full flex items-center justify-center">
          <input
            type="radio"
            name={name}
            id={`${name}-${optionValue}`}
            checked={ optionValue == value }
            onClick={ () => value.value = optionValue }
            class="appearance-none tab-option" />
          <label 
            for={`${name}-${optionValue}`}
            class="flex items-center justify-center h-full w-full border-y border-l border-gray-800 bg-white text-gray-800 hover:bg-slate-100 cursor-pointer"
          >
            { label ? label : optionValue }
          </label>
        </div>
      )) }
    </div>
  )
}