import { BsAward } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { RiFoldersLine } from 'react-icons/ri';
import './About.css';


const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='about-container'>
                <div className='about-me'>
                    <div className='about-me-image'>
                        {/* <img src={ArthurDentAbout} alt='About image' /> */}
                    </div>
                </div>

                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <BsAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>

                        <article className='about-card'>
                            <RiFoldersLine className='about-icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>

        </section>
    );
};


export default About;
