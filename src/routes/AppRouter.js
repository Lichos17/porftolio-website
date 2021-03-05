import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Form } from '../components/Form/Form';
import { Main } from '../components/Main';
import { ProjectPage } from '../components/projects/ProjectPage';
  

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/projects"  component={ ProjectPage }  />
                <Route exact path="/contact" component={ Form } />
                <Route exact path="/" component={ Main } />

                <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
