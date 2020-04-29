import React, { Component } from "react";

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