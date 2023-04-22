import { Link } from 'react-router-dom';
import './Employees.scss';

const Employees = ({name, position, profile, vk, instagram}) => {
    return (
        <>
            <div className="employees-profile-img">
                <img src={profile} alt="" />
            </div>
            <div className="employees-name">
                <p>{name}</p>
            </div>
            <div className="employees-position">
                <p>{position}</p>
            </div>
            <div className="employees-contact">
                <ul>
                    <li> <Link target='_blank' className='vk-link' href={vk}></Link> </li>
                    <li> <Link target='_blank' className='instagram-link' href={instagram}></Link> </li>
                </ul>
            </div>
        </>
    )
}

export default Employees;