import { Icon } from "./interface.ts";

export default function CloseIcon({ tamanho = 24, cor = '#000000' }: Icon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={`${tamanho}px`}
            width={`${tamanho}px`}
            viewBox="0 -960 960 960"
        >
            <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                fill={cor}
            />
        </svg>
    )
}