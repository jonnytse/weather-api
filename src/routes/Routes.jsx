import React, { Component } from 'react';
import { Router } from '@reach/router';
import Weather from '../components/Weather';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Weather path="/" exact />
            </Router>
        );
    }
}

export default Routes;