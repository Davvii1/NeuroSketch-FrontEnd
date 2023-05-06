import { useContext } from "react";
import '../styles/components/Loading.css';
import { LoadingContext } from "../context/LoadingContext";

export default function LoadingScreen() {
    const { loading } = useContext(LoadingContext);

    if (loading) {
        return (
            <div id="spinner-container">
                <div className="loading-spinner-screen">
                </div>
            </div>
        );
    }
    return null;
}