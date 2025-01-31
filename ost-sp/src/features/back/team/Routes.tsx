import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
//import applicationDashboard from "./componenets/Applications";
import * as React from "react";
import List from "../entity/components/List";
import { Team } from "src/data/Team";
import Profile from "../entity/components/Profile";
import Details from "./componenets/TeamContainer";

const TeamRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/team"
      render={() => <List entity={"candidates"} schema={Team} />}
    />
    <Route
      exact={true}
      path="/admin/team/:id"
      render={props => {
        return (
          <Profile id={props.match.params.id} entity={"candidates"}>
            <Details />
          </Profile>
        );
      }}
    />
  </Switch>
);

export default TeamRoutes;
