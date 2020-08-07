import ReactSvgCircle from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: 260
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-container">
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
          <ReactSvgCircle
            lineWidth={10}
            value={value}
            svgExtra={
              <text
                x="20"
                y="35"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle">
                {value}%
              </text>
            }
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
