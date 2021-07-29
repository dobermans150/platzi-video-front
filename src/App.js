import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './shared/layout/components/Layout';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Landing Page */}
        <Route path="/">
          <Switch>
            <Route exact path={`/login`} component={Login} />
          </Switch>
        </Route>

        {/* Pagina principal */}
        <Route exact path="/home">
          <Layout>
            <Switch>
              <Route exact path={`/home`} component={Home} />
            </Switch>
          </Layout>
        </Route>

        {/* Not found */}
        <Route exact path="/404" component={NotFound} />
        <Redirect from="**" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
