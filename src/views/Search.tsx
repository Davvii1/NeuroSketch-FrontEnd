import '../styles/Search.css'
import { v4 as uuid } from 'uuid';
import Logo from '../components/Logo';
import Save from '../assets/svgs/SaveWhite.svg';
import Gear from '../assets/svgs/GearWhite.svg';
import LoginWhite from '../assets/svgs/LoginWhite.svg';
import Logout from '../assets/svgs/LogoutWhite.svg';
import Download from '../assets/svgs/Download.svg';
import SearchBar from '../components/SearchBar';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import LoadingSpinner from '../components/Loading';
import { DalleContext } from '../context/DalleContext';
import { dalleapi } from '../api/dalleapi'
import { logoutRequest, uploadImageRequest } from '../requests/auth';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import Cookies from 'universal-cookie';
import { MessageContext } from '../context/MessageContext';

interface images {
    id: number;
    url: string;
}

const Search = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const refreshToken = cookies.get('refreshToken');
    const { search } = useContext(DalleContext);
    const { token } = useContext(TokenContext);
    const { user } = useContext(UserContext);
    const { setMessage } = useContext(MessageContext);
    const [images, setImages] = useState<images[]>([]);
    const [loading, setLoading] = useState(false);

    const uploadImage = async (url: string) => {
        const id = uuid();
        const r = await uploadImageRequest({ id: id, url: url, authToken: token });
        setMessage(r.data.message);
        user.images.push({ id: id, url: r.data.url })
        console.log(r.data);
    }

    const logoutFunction = async () => {
        const r = await logoutRequest(refreshToken);
    }

    async function getImage() {
        const r = await dalleapi
            .post("/api/v1/dalle", {
                prompt: search,
            });
        return r.data[0].url;
    }

    async function putImages() {
        if (search != '' && images.length != 4) {
            for (let i = 0; i < 4; i++) {
                setLoading(true);
                const url = await getImage();
                setImages(images => [...images, { id: i, url: url }])
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        putImages();
    }, []);

    return (
        <div className='searchContainer'>
            <div className='topContainer'>
                <Logo color="white" logoSize='5.25rem' fontSize='2rem' />
                <SearchBar border={true} onClick={() => putImages()} />
            </div>
            <div className='imageContainer'>
                {images.map(image => (
                    <div className='insideContainer'>
                        <img key={image.id} src={image.url} className='imagePlaceholder' />
                        <img src={Download} id="downloadIcon" alt="Download" onClick={() => uploadImage(image.url)} />
                    </div>
                ))}
                {loading ?
                    (<div className='imageLoading'>
                        <LoadingSpinner />
                    </div>) : null
                }
            </div>
            <div className='iconsWhiteContainer'>
                {refreshToken == undefined ? (<img src={LoginWhite} alt="Login" onClick={() => navigate("/login")} />) : null}
                {refreshToken != undefined ? (
                    <>
                        <img src={Save} alt="Saved" onClick={() => navigate("/saved")} />
                        <img src={Gear} alt="Gear" onClick={() => navigate("/configuration")} />
                        {/* Pass refresh TOKEN */}
                        <img src={Logout} alt="Saved" onClick={() => logoutFunction()} />
                    </>) : null}
            </div>
        </div>
    )
}

export default Search;