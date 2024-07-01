import { ComponentChildren } from "preact";

interface HeaderProps {
    children?: ComponentChildren
    backFn?: () => void;
}

export function Header({ children, backFn }: HeaderProps) {
    return(
        <div class="flex w-full h-16 border-b border-gray-500">
            <div 
                onClick={backFn}
                class="ml-5 my-5 hover:bg-slate-100 flex items-center justify-center rounded-lg cursor-pointer">
                <div class="material-symbols-outlined pl-1.5 select-none">arrow_back_ios</div>
            </div>
            <div class="font-semibold w-full text-center flex items-center justify-center select-none">{children}</div>
            <div class="mr-5 my-5 bg-white flex items-center justify-center rounded-lg w-7">
            </div>
        </div>
    )
}