import type { Signal } from "@preact/signals";

export interface RadioItemParams {
  value: string;
  label?: string;
}

interface RadioSelectorParams {
  name: string;
  options: RadioItemParams[];
  value: Signal;
}

export default function RadioSelector({ name, options, value }: RadioSelectorParams) {
  return(
    <div class="grid grid-cols-3 gap-2">
      { options.map(({ value: optionValue, label }) => (
        <div class="h-10 flex items-center justify-center">
          <input
            type="radio"
            name={name}
            id={`${name}-${optionValue}`}
            checked={ optionValue == value }
            onClick={ () => value.value = optionValue }
            class="appearance-none radio-option" />
          <label 
            for={`${name}-${optionValue}`}
            class="flex items-center justify-center h-full w-full border border-slate-700 rounded-lg bg-white text-slate-800"
          >
            { label ? label : optionValue }
          </label>
        </div>
      )) }
    </div>
  )
}