import '../styles/Search.css'
import Logo from '../components/Logo';
import Save from '../assets/svgs/SaveWhite.svg';
import Gear from '../assets/svgs/GearWhite.svg';
import SearchBar from '../components/SearchBar';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import LoadingSpinner from '../components/Loading';
import { DalleContext } from '../context/DalleContext';
import { dalleapi } from '../api/dalleapi'

interface images {
    id: number;
    url: string;
}

const Search = () => {
    const navigate = useNavigate();
    const { search, setSearch } = useContext(DalleContext);
    const [images, setImages] = useState<images[]>([]);
    const [loading, setLoading] = useState(false);

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
                    <img key={image.id} src={image.url} className='imagePlaceholder' />
                ))}
                {loading ?
                    (<div className='imageLoading'>
                        <LoadingSpinner />
                    </div>) : null
                }
            </div>
            <div className='iconsWhiteContainer'>
                <img src={Save} alt="Saved" onClick={() => navigate("/saved")} />
                <img src={Gear} alt="Gear" onClick={() => navigate("/configuration")} />
            </div>
        </div>
    )
}

export default Search;