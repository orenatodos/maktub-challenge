import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import AdminPrivateRoute from './AdminPrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Heroes from '../pages/Heroes';
import Hero from '../pages/Hero';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={SignIn} />
        <PrivateRoute path="/signup" exact component={SignUp} />
        <PrivateRoute path="/heroes" exact component={Heroes} isPrivate />
        <PrivateRoute path="/heroes/:id" exact component={Hero} isPrivate />
        <AdminPrivateRoute
          path="/register"
          exact
          component={Register}
          isPrivate
        />
      </Switch>
    </Router>
  );
}
