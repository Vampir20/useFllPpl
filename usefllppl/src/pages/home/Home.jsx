import Cards from '../cards/Cards';
import './Home.scss';
import { useRef, useState } from 'react';

const Home = () => {
    const [backModelClass, setBackModelClass] = useState(false);
    const back = useRef(null);
    const model = useRef(null);

    const openWindow = () => {
        back.current.classList.add('back-model-active');

        model.current.classList.add('model-window-active');
    }

    const closeWindow = () => {
        back.current.classList.remove('back-model-active');

        model.current.classList.remove('model-window-active');
    }

    function checkPlaceholder (e, event, className) {
        let input = e.target;
        if (event === 'focus') {
            input.nextSibling.classList.add(className);
        } else {
            if (input.value.length > 0) {
                console.log(false);
            } else {
                input.nextSibling.classList.remove(className);
            }
        }
    }

    return (
        <div className="home-container">
            <div ref={back} onClick={closeWindow} className='back-model'></div>
            <div ref={model} className="model-window">
                <form action="">
                    <div className="login-container">
                        <input onFocus={(e) => checkPlaceholder(e, 'focus', 'focus')} onBlur={(e) => checkPlaceholder(e, 'blure', 'focus')} type="text" placeholder='' className="login" /> 
                        <p>Login</p>
                    </div>
                    <div className="password-container">
                        <input onFocus={(e) => checkPlaceholder(e, 'focus', 'focus')} onBlur={(e) => checkPlaceholder(e, 'blure', 'focus')} type="password" placeholder='' className='password' />
                        <p>Password</p>
                    </div>
                    <div className="email-container">
                        <input onFocus={(e) => checkPlaceholder(e, 'focus', 'focus')} onBlur={(e) => checkPlaceholder(e, 'blure', 'focus')} type="email" placeholder='' className="email" />
                        <p>alex@gmail.com</p>
                    </div>
                    <button className='submit'>Submit</button>
                </form>
                <div className="registration-method">
                    <div className="google">
                        <a href="#"> <img src={require('../svgs/google 1.svg').default} alt="" /> </a>
                    </div>
                    <div className="vk">
                        <a href="#"> <img src={require('../svgs/vk-logo-of-social-network 1.svg').default} alt="" /> </a>
                    </div>
                    <div className="facebook">
                        <a href="#"> <img src={require('../svgs/facebook-app-symbol 1.svg').default} alt="" /> </a>
                    </div>
                    <div className="instagram">
                        <a href="#"> <img src={require('../svgs/instagram 1.svg').default} alt="" /> </a>
                    </div>
                </div>
            </div>
            <div className="top-content">
                <button onClick={openWindow} className='register-button'>Регистрация</button>
                <div className="back-img"></div>
            </div>
            <Cards />
        </div>
    )
}


export default Home;