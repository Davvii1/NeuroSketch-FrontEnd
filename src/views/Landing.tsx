import '../styles/Landing.css'
import Logo from '../components/Logo';
import Save from '../assets/svgs/Save.svg';
import Gear from '../assets/svgs/Gear.svg';
import LoginIcon from '../assets/svgs/Login.svg';
import Logout from '../assets/svgs/Logout.svg';
import SearchBar from '../components/SearchBar';
import { useNavigate } from "react-router-dom";
import { logoutRequest } from '../requests/auth';
import Cookies from 'universal-cookie';

const Landing = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const refreshToken = cookies.get('refreshToken');

    const logoutFunction = async () => {
        const r = await logoutRequest(refreshToken);
    }

    return (
        <>
            <div className='landingContainer'>
                <Logo color="white" logoSize='13.5rem' fontSize='6rem' />
                <SearchBar onClick={() => navigate('/search')} />
            </div>
            <div className='iconsContainer'>
                {refreshToken == undefined ? (<img src={LoginIcon} alt="Login" onClick={() => navigate('/login')} />) : null}
                {refreshToken != undefined ? (
                    <>
                        <img src={Save} alt="Saved" onClick={() => navigate("/saved")} />
                        <img src={Gear} alt="Gear" onClick={() => navigate("/configuration")} />
                        {/* Pass refresh TOKEN */}
                        <img src={Logout} alt="Logout" onClick={() => logoutFunction()} />
                    </>) : null}
            </div>
        </>
    )
}

export default Landing;