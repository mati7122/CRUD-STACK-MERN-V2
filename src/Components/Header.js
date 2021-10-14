import react from '../assets/react.svg';
import node from '../assets/node.svg';

function Header() {
    return (
        <header>
            <h1>CRUD STACK MERN</h1>
            <div>
                <img src={react} className="header-react" alt="React"/>
                <img src={node} className="header-node" alt="Node"/>
            </div>
        </header>
    );
}

export default Header;