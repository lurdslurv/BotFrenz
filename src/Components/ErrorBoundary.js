import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
}

componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
};

render() {
    const { hasError } = this.state
    if (hasError) {
        return <h1> Something went wrong. Try Again!</h1>;
    }
    return this.props.children;
}

export default ErrorBoundary;