import '../styles/components/ChangePassword.css'
import { useContext, useState } from 'react'
import Close from '../assets/svgs/Close.svg'
import Button from './Button'
import { TokenContext } from '../context/TokenContext'
import { changePasswordRequest } from '../requests/auth'
import { MessageContext } from '../context/MessageContext'

const ChangePassword = (props: { active: boolean, setActive: Function }) => {
    const { token } = useContext(TokenContext);
    const { setMessage } = useContext(MessageContext);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const changePassword = async () => {
        await changePasswordRequest({ currentPassword: currentPassword, newPassword: newPassword, authToken: token }).then(function (r) {
            setMessage(r.data.message);
        }).catch(function (err) {
            setMessage(err.response.data.message);
        });
    }

    return (
        props.active ? (<div className='modalBlur'>
            <div className='modal'>
                <img src={Close} id='close' alt="Close" onClick={() => props.setActive(false)} />
                <div className='modalContent'>
                    <div className='inputColContainer'>
                        <p>Current Password</p>
                        <input type="text" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    </div>
                    <div className='inputColContainer'>
                        <p>New Password</p>
                        <input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <Button text='Change password' fontSize='1.5rem' height='3.50rem' impact={true} onClick={() => changePassword()} />
                </div>
            </div>
        </div>) : null
    )
}

export default ChangePassword;