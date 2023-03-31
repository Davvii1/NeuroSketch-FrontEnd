import '../styles/Configuration.css'
import Navbar from '../components/Navbar';
import Icon from '../../public/Logo.png'
import Edit from '../assets/svgs/Edit.svg'
import Button from '../components/Button';
import { useState } from 'react'
import ChangePassword from '../components/ChangePassword';

const Configuration = () => {
    const [email, setEmail] = useState("");
    const [active, setActive] = useState(false);

    return (
        <div className='savedContainer'>
            <ChangePassword active={active} setActive={setActive} />
            <Navbar text='Configuration' icon='saved' />
            <div className='centered'>
                <div className='userPicInfo'>
                    <img src={Icon} alt="Profile" />
                    <p>Pedro Rodríguez</p>
                    <img src={Edit} id='edit' alt="Edit" />
                </div>
                <div className='inputContainer'>
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='buttonContainer'>
                    <Button text='Change password' fontSize='1.5rem' height='3.50rem' impact={true} onClick={() => setActive(true)} />
                    <Button text='Save changes' fontSize='1.5rem' height='3.50rem' impact={true} />
                </div>
            </div>
        </div>
    )
}

export default Configuration;