import '../styles/Landing.css'
import Logo from '../components/Logo';
import Save from '../assets/svgs/Save.svg';
import Gear from '../assets/svgs/Gear.svg';
import SearchBar from '../components/SearchBar';
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='landingContainer'>
                <Logo color="white" logoSize='13.5rem' fontSize='6rem' />
                <SearchBar />
            </div>
            <div className='iconsContainer'>
                <img src={Save} alt="Saved" onClick={() => navigate("/saved")} />
                <img src={Gear} alt="Gear" onClick={() => navigate("/configuration")} />
            </div>
        </>
    )
}

export default Landing;