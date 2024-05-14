import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";

export default function Base() {
    return (
        <>
            <Header title="Lista de Compras" />
            <Outlet />
        </>
    )
}