import React, { Component } from 'react';
import { Router } from '@reach/router';
import Main from '../components/Main';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Main path="/" exact />
            </Router>
        );
    }
}

export default Routes;