import '../styles/Login.css'
import Logo from '../components/Logo';
import Home from '../assets/svgs/Home.svg';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import { getUserRequest, loginRequest } from '../requests/auth';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import Cookies from 'universal-cookie';
import { LoadingContext } from '../context/LoadingContext';
import { MessageContext } from '../context/MessageContext';

const Login = () => {
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);
    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);
    const { setMessage } = useContext(MessageContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [width, setWidth] = useState(window.innerWidth);
    const cookies = new Cookies();

    const login = async () => {
        setLoading(true);
        await loginRequest({ email, password }).then(async function (r) {
            setToken(r.data.authToken);
            cookies.set('refreshToken', r.data.refreshToken);
            const u = await getUserRequest(r.data.authToken);
            setUser(u.data);
            setLoading(false);
            setMessage(r.data.message);
            navigate('/');
        }).catch(async function (err) {
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
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='loginContainer'>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button text='Login' fontSize='1.5rem' height='3.50rem' impact={true} onClick={() => login()} />
                <p>New user? <span id='underlined' onClick={() => navigate('/register')}>Create an account</span></p>
            </div>
            <div className='iconsContainer'>
                <img src={Home} alt="Home" onClick={() => navigate('/')} />
            </div>
        </>
    )
}

export default Login;