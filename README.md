# react-svg-circle
> Svg circle for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-svg-circle
```

## properties
| Name         | Type   | Required | Default   | Description                           |
| ------------ | ------ | -------- | --------- | ------------------------------------- |
| className    | string | false    | -         | The extended className for component. |
| lineWidth    | number | false    | 10        | The circle line-width.                |
| lineCap      | enum   | false    | 'inherit' | The circle line-cap.                  |
| value        | number | false    | 0         | Circle deg, default 0.                |
| onChange     | func   | false    | noop      | The change handler.                   |
| svgProps     | any    | false    | -         | Any other svg props.                  |
| elementProps | any    | false    | -         | Any other circle(main element) props. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-svg-circle/dist/style.css";

  // or use sass
  @import "~@jswork/react-svg-circle/dist/style.scss";

  // customize your styles:
  $react-svg-circle-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSvgCircle from '@jswork/react-svg-circle';
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

  ```

## documentation
- https://afeiship.github.io/react-svg-circle/


## license
Code released under [the MIT license](https://github.com/afeiship/react-svg-circle/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-svg-circle
[version-url]: https://npmjs.org/package/@jswork/react-svg-circle

[license-image]: https://img.shields.io/npm/l/@jswork/react-svg-circle
[license-url]: https://github.com/afeiship/react-svg-circle/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-svg-circle
[size-url]: https://github.com/afeiship/react-svg-circle/blob/master/dist/react-svg-circle.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-svg-circle
[download-url]: https://www.npmjs.com/package/@jswork/react-svg-circle
