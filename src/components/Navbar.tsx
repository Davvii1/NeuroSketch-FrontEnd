import '../styles/components/Navbar.css'
import Icon from '../../public/Logo.png'
import Gear from '../assets/svgs/Gear.svg'
import Save from '../assets/svgs/Save.svg'
import Logout from '../assets/svgs/Logout.svg'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { logoutRequest } from '../requests/auth'

const Navbar = (props: { text: string, icon: string }) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const refreshToken = cookies.get('refreshToken');

    const logoutFunction = async () => {
        const r = await logoutRequest(refreshToken);
    }

    return (
        <div className='navbarContainer'>
            <div className='logo'>
                <img id='homeLogo' src={Icon} alt="Logo" onClick={() => navigate("/")} />
                <p id='homeText' onClick={() => navigate("/")}>Home</p>
            </div>
            <p id='centeredText'>{props.text}</p>
            <div className='icons'>
                {props.icon == 'gear' ?
                    (
                        <img src={Gear} alt="Configuration" onClick={() => navigate("/configuration")} />
                    ) : (
                        <img src={Save} alt="Saved" onClick={() => navigate("/saved")} />
                    )
                }
                {/* Pass refresh TOKEN */}
                <img src={Logout} alt="Logout" onClick={() => logoutFunction()} />
            </div>
        </div>
    )
}

export default Navbar;