import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component is about to be unmounted!");
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}

export default ExampleComponent;
