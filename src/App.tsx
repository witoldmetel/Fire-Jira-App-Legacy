import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import { Project } from './fixtures/types';
import {
  Navbar,
  Dashboard,
  ProjectCreate,
  MembersModal,
  SignInComponent,
  SignUpComponent,
  TaskCreate,
  TaskRemove,
  TaskList,
  TaskEdit,
} from './components';

import './App.scss';

export interface Props {
  projects: Project[];
}

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <React.Fragment>
        <Navbar {...props} />
        <Component {...props} />
      </React.Fragment>
    )}
  />
);

class App extends React.Component<Props> {
  public render() {
    // @todo: Find better solution for auth loading
    return !isLoaded(this.props?.projects) ? (
      <span>Loading...</span>
    ) : (
      <BrowserRouter>
        <Switch>
          <NavRoute path="/signin" exact component={SignInComponent} />
          <NavRoute path="/signup" exact component={SignUpComponent} />
          <NavRoute path="/" exact component={Dashboard} />
          <NavRoute path="/project/new" exact component={ProjectCreate} />
          <NavRoute path="/project/:id" exact component={TaskList} />
          <NavRoute path="/project/:id/members" exact component={MembersModal} />
          <NavRoute path="/project/:id/task/new" exact component={TaskCreate} />
          <NavRoute path="/project/:id/task/edit/:id" exact component={TaskEdit} />
          <NavRoute path="/project/:id/task/delete/:id" exact component={TaskRemove} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(firestoreConnect([{ collection: 'projects' }]), connect(mapStateToProps))(App);
