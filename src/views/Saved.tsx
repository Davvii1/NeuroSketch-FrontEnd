import '../styles/Saved.css'
import Navbar from '../components/Navbar';
import Icon from '../../public/Logo.png'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Saved = () => {
    const { user } = useContext(UserContext);

    return (
        <div className='savedContainer'>
            <div className='userContainer'>
                <img src={Icon} alt="Profile" />
                <p>{user.nickname}</p>
            </div>
            <div className='imageContainer'>
                {user.images ? user.images.map(image => (
                    <img key={image.id} src={image.url} className='imagePlaceholder' />
                )) : null}
            </div>
        </div>
    )
}

export default Saved;