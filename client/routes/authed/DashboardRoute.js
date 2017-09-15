import React from 'react';
import { Route } from 'react-router-dom';
import PageComponent from './../../components/Page';

const DashboardRoute = () => (
    <Route path="/page" component={PageComponent} />
);

export default DashboardRoute;
