import '../styles/components/SearchBar.css'
import Icon from '../assets/svgs/Search.svg'
import { useContext } from 'react'
import axios from 'axios'
import Button from './Button'
import { DalleContext } from '../context/DalleContext'
import { DalleProvider } from '../context/DalleProvider'

const SearchBar = (props: { width?: string, border?: boolean }) => {
    const { search, setSearch } = useContext(DalleContext);

    const getImages = async () => {
        const r = await axios
            .post("/api/v1/dalle", {
                prompt: search,
            });
        console.log(r.data)
    }

    return (
        <DalleProvider>
            <div className='container'>
                <img src={Icon} id='search' alt="Search" />
                <input id='bar' type="text" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "55vw", border: props.border ? "1px solid black" : "" }} />
                <Button text='Go' onClick={getImages} height='3.125rem' fontSize='1rem' />
            </div>
        </DalleProvider>
    )
}

export default SearchBar;