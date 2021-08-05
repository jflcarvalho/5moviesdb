import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './config/router';

import Layout from './layouts/home';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route) => (
            // map fonksiyonu kullanırken her bir eleman için unique bir key verilmeli
            <Route key={route.title} exact={route.exact} path={route.path}>
              <Layout>{route.component}</Layout>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
