import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/notFound" component={NotFound} />
        <Redirect from="*" to="/notFound" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
