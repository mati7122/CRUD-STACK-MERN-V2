import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import portfolio from '../assets/portfolio.svg';

export default function Footer(){
    return(
        <footer>
            <h2>CRUD created by Matías Herrera</h2>
            <span>Visit</span>
            <div>
                <a href="https://github.com/mati7122" target="_blank" rel="noreferrer">
                    <img src={github} alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/matias7122/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn"/>
                </a>
                <a href="https://portfolio-psi-kohl-25.vercel.app" target="_blank" rel="noreferrer">
                    <img src={portfolio} alt="Portfolio"/>
                </a>
            </div>
        </footer>
    );
}