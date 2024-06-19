import type { Signal } from "@preact/signals";

export interface RadioItemParams {
  value: string;
  label?: string;
}

interface RadioSelectorParams<T> {
  name: string;
  options: RadioItemParams[];
  value: Signal<T>;
}

export default function RadioSelector<T>({ name, options, value }: RadioSelectorParams<T>) {
  return(
    <div>
      { options.map(({ value: optionValue, label }) => (
        <>
          <input
            type="radio"
            name={name}
            id={`${name}-${optionValue}`}
            checked={ optionValue == value }
            onClick={ () => value.value = optionValue } />
          <label for={`${name}-${optionValue}`}>
            { label ? label : optionValue }
          </label>
        </>
      )) }
    </div>
  )
}