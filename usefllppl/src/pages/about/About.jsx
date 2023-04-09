import '../about/About.scss';
import Employees from './components/Employess/Employess';

const About = () => {
    const employees = [
        {
            id: 1,
            name: 'Nilita',
            position: 'Backend Developer',
            profile: require('../imgs/smiley-man-relaxing-outdoors.jpg'),
            vk: 'https://vk.com',
            instagram: 'https://instagram.com',
        },
        {
            id: 2,
            name: 'Georgiy',
            position: 'Frontend developer',
            profile: require('../imgs/smiley-man-relaxing-outdoors.jpg'),
            vk: 'https://vk.com',
            instagram: 'https://instagram.com',
        },
        {
            id: 3,
            name: 'Adolph',
            position: 'Chief PR manager',
            profile: require('../imgs/smiley-man-relaxing-outdoors.jpg'),
            vk: 'https://vk.com',
            instagram: 'https://instagram.com',
        },
        {
            id: 4,
            name: 'Vinston',
            position: 'Chief designer',
            profile: require('../imgs/smiley-man-relaxing-outdoors.jpg'),
            vk: 'https://vk.com',
            instagram: 'https://instagram.com',
        },
    ]

    return (
        <div className="about-us">
            <div className="our-team">
                <p>Our Team</p>
                <div className="team-employees">
                    <div className="team-container">
                        {
                            employees.map(item => (
                                <div key={item.id} className="employees">
                                    <Employees name={item.name} position={item.position} profile={item.profile} vk={item.vk} instagram={item.instagram} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;