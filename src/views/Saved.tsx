import '../styles/Saved.css'
import Navbar from '../components/Navbar';
import Icon from '../../public/Logo.png'

const Saved = () => {
    const images = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]

    return (
        <div className='savedContainer'>
            <Navbar text='Saved' icon='gear' />
            <div className='userContainer'>
                <img src={Icon} alt="Profile" />
                <p>Pedro Rodríguez</p>
            </div>
            <div className='imageContainer'>
                {images.map(image => (
                    <div key={image.id} className='imagePlaceholder'></div>
                ))}
            </div>
        </div>
    )
}

export default Saved;