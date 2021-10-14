import { Link } from "react-router-dom";
import Item from "./Item";
import axios from "axios";
import useSWR from "swr";
import Loader from "./Loader";

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
                <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Loader/>
                </div>
            }

            {
                data &&

                <div className="container-item">
                    {
                        data.map(i => {
                            return (
                                <Item name={i.name} location={i.location} number={i.number} email={i.email} id={i._id} />
                            );
                        })}
                </div>
            }

        </div>
    );
}

export default Home