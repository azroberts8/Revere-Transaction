import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w-full h-14 bg-blue-700 hover:bg-blue-900 text-white text-lg font-semibold rounded-lg"
    />
  )
}