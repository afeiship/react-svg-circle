# react-svg-circle
> Svg circle for react.

## installation
```shell
npm install -S @feizheng/react-svg-circle
```

## update
```shell
npm update @feizheng/react-svg-circle
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| lineWidth | number | false    | 10      | The circle line-width.                |
| value     | number | false    | 0       | Circle deg, default 0.                |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-svg-circle/dist/style.scss";

  // customize your styles:
  $react-svg-circle-options: ()
  ```
2. import js
  ```js
  import ReactSvgCircle from '@feizheng/react-svg-circle';
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

  ```

## documentation
- https://afeiship.github.io/react-svg-circle/

## resources
- https://codepen.io/depthdev/pen/bNyxzG
