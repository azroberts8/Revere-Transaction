import { Signal } from "@preact/signals";

interface TextInputParams {
  name: string;
  label?: string;
  value: Signal<string>;
}

export default function TextInput({ name, label, value }: TextInputParams) {
  return(
    <>
      <input 
        type="text"
        id={name}
        name={name}
        value={value}
        onInput={ (e) => value.value = e.currentTarget.value } />
      <label for={name}>{ label ? label : "" }</label>
    </>
  )
}