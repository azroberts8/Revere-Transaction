import { Signal } from "@preact/signals";

interface TextInputParams {
  name: string;
  label?: string;
  value: Signal<string>;
}

export default function TextInput({ name, label, value }: TextInputParams) {
  return(
    <div class="h-14 overflow-hidden border-x border-b border-gray-800 first:border-t first:rounded-t-lg last:rounded-b-lg">
      <input 
        type="text"
        id={name}
        name={name}
        value={value}
        onInput={ (e) => value.value = e.currentTarget.value } />
      <label for={name}>{ label ? label : "" }</label>
    </div>
  )
}