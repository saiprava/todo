
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Home/Home';
import '@innovaccer/design-system/css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Fragment className={App}>
      <Route exact path="/" component={Home}/>
    </Fragment>
    </BrowserRouter>
    
  );
}

export default App;
