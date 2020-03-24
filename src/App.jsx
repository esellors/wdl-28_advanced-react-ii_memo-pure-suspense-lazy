import React, {Suspense, lazy} from "react";
import "./styles.css";
import SimpleDisplayComp from './components/SimpleDisplayComp';
import SimplePropComp from './components/SimplePropComp';
// import BigComponent from './components/BigComponent';
const BigComponent = lazy(() => import('./components/BigComponent'));


export default class App extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    solution: null,
    message: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: +e.target.value })
  }

  handleClick = () => {
    this.setState({ solution: this.state.num1 + this.state.num2 })
  }

  handleClick2 = () => {
    import('./components/ThankYou')
      .then(component => this.setState({ message: component.default() }))
      .catch(err => console.log(err))
  }

  render() {
    console.log('APPJS rendered')

    return (
      <div className="App">
        

        <SimpleDisplayComp />

        <input name='num1' onChange={this.handleInput} />
        <input name='num2' onChange={this.handleInput} />
        <button onClick={this.handleClick}>ADD!</button>

        <SimplePropComp solution={this.state.solution} />

        <button onClick={this.handleClick2}>CLICK ME NOW</button>
        {this.state.message}

        <Suspense fallback={<marquee>Loading...</marquee>}>
          <BigComponent />
        </Suspense>

      </div>
    );
  }
}
