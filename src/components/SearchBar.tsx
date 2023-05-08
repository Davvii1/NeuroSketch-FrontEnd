import '../styles/components/SearchBar.css'
import Icon from '../assets/svgs/Search.svg'
import Button from './Button'
import { useSearchParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MessageContext } from '../context/MessageContext'

interface Props {
    width?: string,
    border?: boolean,
}

const SearchBar = (props: Props) => {
    const [searchParams] = useSearchParams();
    const { setMessage } = useContext(MessageContext)
    const [searchValue, setSearchValue] = useState(searchParams.get('search'));

    const setValues = (value: string) => {
        setSearchValue(value);
    }

    const GoSearch = () => {
        if (searchValue != null) {
            window.location.href = `/search?&search=${searchValue}`;
        } else {
            setMessage("Set prompt value");
        }
    }

    return (
        <div className='container'>
            <div className='searchBarContainer'>
                <img src={Icon} id='search' alt="Search" />
                <input id='bar' type="text" value={searchValue || ''} onChange={(e) => setValues(e.target.value)} autoComplete='off' style={{ border: props.border ? "1px solid black" : "" }} />
            </div>
            <Button text='Go' onClick={() => GoSearch()} height='3.125rem' fontSize='1rem' />
        </div>
    )
}

export default SearchBar;