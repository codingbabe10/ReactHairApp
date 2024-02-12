import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Update state to indicate that an error occurred
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI here
      return <div>Error: Something went wrong.</div>;
    }

    // If no error occurred, render children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;
