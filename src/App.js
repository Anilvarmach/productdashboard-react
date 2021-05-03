import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Userlist from './users';
import Usercreate from './usercreate';
import Useredit from './useredit';
import Product from './product';
import Productedit from './productedit';
import Productcreate from './productcreate';

function App() {
  return <>
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Route path='/users' component={Userlist}></Route>
                <Route path='/usercreate' component={Usercreate}></Route>
                <Route path='/useredit' component={Useredit}></Route>
                <Route path='/product' component={Product}></Route>
                <Route path='/productedit' component={Productedit}></Route>
                <Route path='/productcreate' component={Productcreate}></Route>
              </Switch>
          </div>
        </div>
      </div>
      </div>
      </Router>
  </>
}

export default App;
