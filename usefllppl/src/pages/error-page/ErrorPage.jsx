import './ErrorPage.scss';
import { useLocation, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="error-page">
            {
                location.pathname === '/home'
                ?
                (
                    <p>Our site does not have a path called {location.pathname},<br/>instead we use "/"</p>
                )
                :
                (
                    <>
                        <p>Error<br/>No pages found for {location.pathname}</p>                    
                    </>
                )
            }
            <div className="b">
                <button onClick={() => navigate(-1)} className='home-button'>Go Home</button>
                <button onClick={() => navigate('/', {replace: false})} className='back-button'>Go Back</button>
            </div>
        </div>
    )
}

export default ErrorPage;