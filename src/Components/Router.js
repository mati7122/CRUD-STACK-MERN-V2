import { Switch, Route, BrowserRouter } from 'react-router-dom';
//Components
import Error from './404Error';
import Home from './Home';
import AddUser from './Add';
//Images
import add from '../assets/add-user.png'
import update from '../assets/user.png'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path exact="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <AddUser name="Add user" img={add} value="Add" message="User added successfully"/>
                </Route>
                <Route path="/update/:id">
                    <AddUser name="Update" img={update} value="Update" message="User data updated"/>
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;