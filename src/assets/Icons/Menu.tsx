import { Icon } from "./interface.ts";

export default function Menu({ tamanho = 24, cor = '#000000' }: Icon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={`${tamanho}px`}
            width={`${tamanho}px`}
            viewBox="0 -960 960 960"
        >
            <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                fill={cor}
            />
        </svg>
    )
}