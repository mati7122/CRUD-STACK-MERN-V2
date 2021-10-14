import { Link } from "react-router-dom";
import Item from "./Item";
import axios from "axios";
import useSWR from "swr";

const uri = "https://api-crud-stack-mern.herokuapp.com/api/get-data"

const fetcher = url => axios.get(uri).then(res => res.data.succes)

function Home() {

    const { data, error } = useSWR('get-data', fetcher)

    return (
        <div>
            <Link to="/add">
                <button id="add-button">Add User</button>
            </Link>

            {error &&
                <span>Error</span>
            }

            {
                !data &&
                <span>Loading</span>
            }

            {
                data &&
                // JSON.stringify(data)
                data.map(i => {
                    return (
                        <Item name={i.name} location={i.location} number={i.number} email={i.email} key={i.id}/>
                    );
                })
            }

        </div>
    );
}

export default Home