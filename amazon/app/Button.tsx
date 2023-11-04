'use client'

import { toast } from 'sonner';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading';

interface ButtonProps {
    buttonText: string;
    toastText: string;
    toastType?: ToastType;
}

export default function Button({ buttonText, toastText, toastType }: ButtonProps) {
    return (
        <button
            onClick={() => toastType ? toast[toastType](toastText) : toast(toastText)}
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-[#146eb4] hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
        >
            {buttonText}
        </button>
    );
}