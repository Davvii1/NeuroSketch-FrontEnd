import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavbarLayout = () => {
    const location = useLocation();
    const [text, setText] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        if (location.pathname == '/configuration') { setText('Configuration'); setIcon('saved') }
        if (location.pathname == '/saved') { setText('Saved'); setIcon('gear') }
    }, [location.pathname])

    return (
        <>
            <Navbar text={text} icon={icon} />
            <Outlet />
        </>
    )
};

export default NavbarLayout;