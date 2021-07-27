import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './shared/layout/components/Header';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
