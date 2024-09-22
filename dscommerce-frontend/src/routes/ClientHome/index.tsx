import { Outlet } from "react-router-dom";
import HeaderCliente from "../../components/HeaderClient";



export default function ClienteHome(){
    return (

        <>
        <HeaderCliente/>
        <Outlet/>
        </>

    )
}