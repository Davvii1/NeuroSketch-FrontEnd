import '../styles/Configuration.css'
import Icon from '../../public/Logo.png'
import Button from '../components/Button';
import { useContext, useState } from 'react'
import ChangePassword from '../components/ChangePassword';
import { UserContext } from '../context/UserContext';
import { TokenContext } from '../context/TokenContext';
import { updateUserRequest } from '../requests/auth';
import { MessageContext } from '../context/MessageContext';

const Configuration = () => {
    const { user, setUser } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const { setMessage } = useContext(MessageContext);
    const [email, setEmail] = useState(user.email);
    const [nickname, setNickname] = useState(user.nickname);
    const [active, setActive] = useState(false);

    const saveChanges = async () => {
        setUser(user => ({ ...user, email: email }));
        await updateUserRequest({ nickname: nickname, email: email, authToken: token }).then(function (r) {
            setMessage(r.data.message);
        }).catch(function (err) {
            setMessage(err.data.message);
        });

    }

    return (
        <div className='savedContainer'>
            <ChangePassword active={active} setActive={setActive} />
            <div className='centered'>
                <div className='userPicInfo'>
                    <img src={Icon} alt="Profile" />
                </div>
                <div className='inputContainer'>
                    <p>Nickname</p>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>
                <div className='inputContainer'>
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='buttonContainer'>
                    <Button text='Change password' fontSize='1.5rem' height='3.50rem' impact={true} onClick={() => setActive(true)} />
                    <Button text='Save changes' fontSize='1.5rem' height='3.50rem' impact={true} onClick={() => saveChanges()} />
                </div>
            </div>
        </div>
    )
}

export default Configuration;