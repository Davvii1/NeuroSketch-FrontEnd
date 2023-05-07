import '../styles/components/SearchBar.css'
import Icon from '../assets/svgs/Search.svg'
import Button from './Button'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

interface Props {
    width?: string,
    border?: boolean,
}

const SearchBar = (props: Props) => {
    const [searchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get('search'));

    const setValues = (value: string) => {
        setSearchValue(value);
    }

    return (
        <div className='container'>
            <img src={Icon} id='search' alt="Search" />
            <input id='bar' type="text" value={searchValue || ''} onChange={(e) => setValues(e.target.value)} autoComplete='off' style={{ width: "55vw", border: props.border ? "1px solid black" : "" }} />
            <Button text='Go' onClick={() => window.location.href = `/search?&search=${searchValue}`} height='3.125rem' fontSize='1rem' />
        </div>
    )
}

export default SearchBar;