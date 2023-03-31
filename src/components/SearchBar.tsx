import '../styles/components/SearchBar.css'
import Icon from '../assets/svgs/Search.svg'
import { useState } from 'react'

const SearchBar = (props: { width?: string, border?: boolean }) => {
    const [search, setSearch] = useState("");

    return (
        <div className='container'>
            <img src={Icon} id='search' alt="Search" />
            <input id='bar' type="text" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "55vw", border: props.border ? "1px solid black" : "" }} />
        </div>
    )
}

export default SearchBar;