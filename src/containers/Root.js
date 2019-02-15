import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/:filter?" component={App} />
            </BrowserRouter>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
