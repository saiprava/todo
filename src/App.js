
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Home/Home';
import '@innovaccer/design-system/css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import DeletedTask from './Components/DeletedTask/Deletedtask';
import Donetask from './Components/donetask/donetask';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
    
    <Fragment className={App}>
    <Navigation/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/deleted-task" component={DeletedTask}/>
      <Route exact path="/completed-task" component={Donetask} />
      </Switch>

    </Fragment>
    </BrowserRouter>
    
  );
}

export default App;
