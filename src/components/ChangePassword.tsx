import '../styles/components/ChangePassword.css'
import { useState } from 'react'
import Close from '../assets/svgs/Close.svg'
import Button from './Button'

const ChangePassword = (props: { active: boolean, setActive: Function }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

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
                    <Button text='Change password' fontSize='1.5rem' height='3.50rem' impact={true} />
                </div>
            </div>
        </div>) : null
    )
}

export default ChangePassword;