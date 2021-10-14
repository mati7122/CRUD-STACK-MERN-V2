import { Link } from "react-router-dom";
import add from '../assets/add-user.png';
import Item from "./Item";

function Home() {
    return (
        <div>
            <Link to="/add">
                <button id="add-button">Add User</button>
            </Link>

            <div>
                <Item />
                <Item />
            </div>
        </div>
    );
}

export {
    Home,
    add
}