import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import Dashboard from './authed/DashboardRoute';

const Router = () => (
    <BrowserRouter>
        <div>
            <HomeRoute />
            <Dashboard />
        </div>
    </BrowserRouter>
);

export default Router;
