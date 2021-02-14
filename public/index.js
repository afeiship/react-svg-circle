import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSvgCircle from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: 180
  };
  render() {
    const { value } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-svg-circle">
        <h2 className="is-title">Drag me to change</h2>
        <div className="is-control">
          <input
            type="range"
            onChange={(e) => {
              const { value } = e.target;
              this.setState({ value: parseInt(value) });
            }}
            step="1"
            min="0"
            max="360"
            value={value}
            name=""
            id=""
          />
        </div>
        <div className="is-component">
          <ReactSvgCircle lineWidth={20} lineCap="inherit" value={value}>
            <text
              x="20"
              y="35"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle">
              {value}%
            </text>
          </ReactSvgCircle>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
