import React from 'react';

const Layout = ({ children }) => (
    <div className="centered text-center">
        <h1>Webpack React Express</h1>
        { children }
    </div>
)

Layout.propTypes = {
    children: React.PropTypes.node
};

Layout.defaultProps = {
    children: []
};

export default Layout;
