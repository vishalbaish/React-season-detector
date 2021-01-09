import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from './SeasonDisplay.js'
import Spinner from "./Spinner.js"

class App extends React.Component {
  state = { lat: null, errorMessage: '' }; 


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition (
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div><SeasonDisplay lat={this.state.lat} /></div>;
      }
  
      if (!this.state.lat && this.state.errorMessage){
      return <div>errMessage: { this.state.errorMessage }</div> ;
      }
  
      return <div><Spinner message={"Please accept location request.."}/></div>
  }

  render() {
  return <div>{this.renderContent()}</div>;
  }

}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
