import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    img1: true,
    img2: true,
    img3: true,
    img4: true
  };

  // handleIncrement increments this.state.count by 1
  imagebeenclicked = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        
      </div>
    );
  }
}

export default Counter;
