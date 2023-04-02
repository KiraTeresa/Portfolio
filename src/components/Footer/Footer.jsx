import './footer.scss'
// import { Link } from 'react-router-dom';
import GitHub from '../../assets/images/github-mark-white.png'
import LinkedIn from '../../assets/images/linkedin-white.png'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='social-media'>
                    <a href="https://www.linkedin.com/in/kira-teresa-soba/" target="_blank" rel="noreferrer" className='zenDots'>
                        {/* <span>Linkedin</span> */}
                        <img src={LinkedIn} alt="LinkedIn icon" />
                    </a>
                    <a href="https://github.com/KiraTeresa" target="_blank" rel="noreferrer" className='zenDots'>
                        {/* <span>GitHub</span> */}
                        <img src={GitHub} alt="GitHub icon" />
                    </a>
                </div>
                <div>
                    {/* <Link to="/legal-notice">legal notice</Link> */}
                    <p>© {currentYear}, Kira Teresa Soba</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;