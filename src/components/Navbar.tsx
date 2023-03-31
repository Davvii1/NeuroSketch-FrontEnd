import '../styles/components/Navbar.css'
import Icon from '../../public/Logo.png'
import Gear from '../assets/svgs/Gear.svg'
import Save from '../assets/svgs/Save.svg'
import { useNavigate } from "react-router-dom";

const Navbar = (props: { text: string, icon: string }) => {
    const navigate = useNavigate();

    return (
        <div className='navbarContainer'>
            <div className='logo'>
                <img id='homeLogo' src={Icon} alt="Logo" onClick={() => navigate("/")} />
                <p id='homeText' onClick={() => navigate("/")}>Inicio</p>
            </div>
            <p id='centeredText'>{props.text}</p>
            {props.icon == 'gear' ?
                (
                    <img src={Gear} id='icon' alt="Configuration" onClick={() => navigate("/configuration")} />
                ) : (
                    <img src={Save} id='icon' alt="Saved" onClick={() => navigate("/saved")} />
                )
            }
        </div>
    )
}

export default Navbar;