import '../styles/Login.css'
import Logo from '../components/Logo';
import Home from '../assets/svgs/Home.svg';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import { registerRequest } from '../requests/auth';
import { MessageContext } from '../context/MessageContext';
import { LoadingContext } from '../context/LoadingContext';

const Register = () => {
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [width, setWidth] = useState(window.innerWidth);

    const register = async () => {
        setLoading(true);
        await registerRequest({ nickname, email, password }).then(function (r) {
            setLoading(false);
            setMessage(r.data.message);
            navigate('/login');
        }).catch(function (err) {
            setLoading(false);
            setMessage(err.response.data.message);
        });
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <>
            <div className='authContainer'>
                {width < 640 ? (
                    <Logo color="white" logoSize='5rem' fontSize='2rem' />
                ) : (
                    <Logo color="white" logoSize='6.75rem' fontSize='3rem' />
                )}
                <div className='loginContainer'>
                    <p>Nickname</p>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>
                <div className='loginContainer'>
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='loginContainer'>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button text='Register' fontSize='1.5rem' height='3.50rem' impact={true} onClick={() => register()} />
                <p>Already have an account? <span id='underlined' onClick={() => navigate('/login')}>Login</span></p>
            </div>
            <div className='iconsContainer'>
                <img src={Home} alt="Home" onClick={() => navigate('/')} />
            </div>
        </>
    )
}

export default Register;