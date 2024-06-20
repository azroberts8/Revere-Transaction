import { ComponentChildren } from "preact";

export function InputGroup({ children }: { children: ComponentChildren }) {
    return (
        <div class="input-group">
            { children }
        </div>
    )
}