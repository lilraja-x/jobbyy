import './Footer.css';
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">JOOBBY</h1>
                    
                <h2>Contact</h2>
                
                <address>
                5534 Somewhere In. The World 22193-10212<br />
                    
                <Link className="footer__btn" href="mailto:rajauzair184@gmail.com">Email Us</Link>
                </address>
            </div>
            
            <ul className="footer__nav">
                <li className="nav__item">
                <h2 className="nav__title">Job Types</h2>

                <ul className="nav__ul">
                    <li>
                    <Link href="/">Part Times</Link>
                    </li>

                    <li>
                    <Link href="/">Full Time</Link>
                    </li>
                        
                    <li>
                    <Link href="/">Intern</Link>
                    </li>
                    <li>
                    <Link href="/">Remote</Link>
                    </li>
                    <li>
                    <Link href="/">On-site</Link>
                    </li>
                </ul>
                </li>
                
                <li className="nav__item nav__item--extra">
                <h2 className="nav__title">Category</h2>
                
                <ul className="nav__ul nav__ul--extra">
                    <li>
                    <Link href="/">IT & Technician</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Software Developer</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Graphic Designer</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Product Manager</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Account and Finance</Link>
                    </li>
                    
                    <li>
                    <Link href="/">IoT</Link>
                    </li>
                </ul>
                </li>
                
                <li className="nav__item">
                <h2 className="nav__title">Legal</h2>
                
                <ul className="nav__ul">
                    <li>
                    <Link href="/">Privacy Policy</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Terms of Use</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Sitemap</Link>
                    </li>
                </ul>
                </li>
            </ul>
            
            <div className="legal">
                <p>&copy;. All rights reserved.</p>
                
                <div className="legal__links">
                <span>Made with <span className="heart">♥</span> Next.js</span>
                </div>
            </div>
            </footer>
    );
}