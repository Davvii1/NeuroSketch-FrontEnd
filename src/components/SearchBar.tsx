import '../styles/components/SearchBar.css'
import Icon from '../assets/svgs/Search.svg'
import { MouseEventHandler, useContext } from 'react'
import Button from './Button'
import { DalleContext } from '../context/DalleContext'

interface Props {
    width?: string,
    border?: boolean,
    onClick: MouseEventHandler
}

const SearchBar = (props: Props) => {
    const { search, setSearch } = useContext(DalleContext);

    return (
        <div className='container'>
            <img src={Icon} id='search' alt="Search" />
            <input id='bar' type="text" value={search} autoComplete='off' onChange={(e) => setSearch(e.target.value)} style={{ width: "55vw", border: props.border ? "1px solid black" : "" }} />
            <Button text='Go' onClick={props.onClick} height='3.125rem' fontSize='1rem' />
        </div>
    )
}

export default SearchBar;