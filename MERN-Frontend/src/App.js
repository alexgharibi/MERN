import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/places/new" exact component={NewPlace} />
          <Route path="/:userId/places" exact component={UserPlaces} />
          <Route path="/places/:placeId" component={UpdatePlace} />
          <Route path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
