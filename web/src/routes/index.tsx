import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Heroes from '../pages/Heroes';
import Hero from '../pages/Hero';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/heroes" exact component={Heroes} />
        <Route path="/heroes/:id" exact component={Hero} />
      </Switch>
    </Router>
  );
}
