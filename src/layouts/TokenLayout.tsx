import { Outlet } from "react-router";
import LoadingScreen from "../components/LoadingScreen";
import MessageBox from "../components/MessageBox";

const TokenLayout = () => {
    return (
        <>
            <Outlet />
            <LoadingScreen />
            <MessageBox />
        </>
    )
};

export default TokenLayout;