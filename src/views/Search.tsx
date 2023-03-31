import '../styles/Search.css'
import Logo from '../components/Logo';
import Save from '../assets/svgs/SaveWhite.svg';
import Gear from '../assets/svgs/GearWhite.svg';
import SearchBar from '../components/SearchBar';
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const images = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]

    return (
        <div className='searchContainer'>
            <div className='topContainer'>
                <Logo color="white" logoSize='5.25rem' fontSize='2rem' />
                <SearchBar border={true} />
            </div>
            <div className='imageContainer'>
                {images.map(image => (
                    <div key={image.id} className='imagePlaceholder'></div>
                ))}
            </div>
            <div className='iconsWhiteContainer'>
                <img src={Save} alt="Saved" onClick={() => navigate("/saved")} />
                <img src={Gear} alt="Gear" onClick={() => navigate("/configuration")} />
            </div>
        </div>
    )
}

export default Search;