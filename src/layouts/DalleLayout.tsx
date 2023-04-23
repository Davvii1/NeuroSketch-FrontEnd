import { Outlet } from "react-router";
import { DalleProvider } from "../context/DalleProvider";

const DalleLayout = () => (
    <DalleProvider>
        <Outlet />
    </DalleProvider>
);

export default DalleLayout;