import { Navigate } from "react-router-dom";

interface Props {
    isLoggedIn: boolean,
    children: JSX.Element
}

const Protected = ({ isLoggedIn, children }: Props) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default Protected;