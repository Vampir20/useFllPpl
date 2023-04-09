import './ErrorPage.scss';
import { useLocation } from 'react-router-dom'

const ErrorPage = () => {
    const location = useLocation();

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
        </div>
    )
}

export default ErrorPage;