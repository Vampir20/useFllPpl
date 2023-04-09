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
                    <li> <a target='_blank' href={vk}><img src={require('../../../svgs/vk-logo-of-social-network 1.svg').default} alt="" /></a> </li>
                    <li> <a target='_blank' href={instagram}><img src={require('../../../svgs/instagram 1.svg').default} alt="" /></a> </li>
                </ul>
            </div>
        </>
    )
}

export default Employees;