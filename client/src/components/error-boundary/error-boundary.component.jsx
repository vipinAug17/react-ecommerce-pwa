import React from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="errorImage-overlay">
          <img
            className="errorImage-container"
            src="https://i.imgur.com/yW2W9SC.png"
            alt="error img"
          />
          <h1 className="errorImage-text">Sorry this page is broken</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
