// ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Error ko pakadta hai aur fallback UI ke liye state update karta hai
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Error ko log ya track karne ke liye
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI jab error aata hai
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
