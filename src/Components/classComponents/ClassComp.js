import React, { Component } from 'react'

export default class ClassComp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Eren"
    }
    console.log("Rendered from Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Rendered from DerivedState");
    return null;
  }

  shouldComponentUpdate() {
    console.log("Rendered from shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevPros, prevState) {
    console.log("Rendered from getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Rendered from componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Guhan"
    })
  }

  render() {
    console.log("Rendered from return() method");
    return (
      <div>
        <button className='btn btn-success' onClick={() => { this.setState(this.changeState) }}>Click to Change State</button>
        <div className='container'>
          <p>{this.state.name}</p>
        </div>
      </div>
    )
  }
}
