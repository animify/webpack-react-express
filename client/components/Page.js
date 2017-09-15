import React from 'react';

const PageComponent = ({ subheading }) => (
    <h6>
        { subheading }
    </h6>
);

PageComponent.propTypes = {
    subheading: React.PropTypes.string
};

PageComponent.defaultProps = {
    subheading: 'Another page in the router.'
};

export default PageComponent;
