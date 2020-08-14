# react-svg-circle
> Svg circle for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-svg-circle
```

## update
```shell
npm update @feizheng/react-svg-circle
```

## properties
| Name      | Type   | Required | Default  | Description                           |
| --------- | ------ | -------- | -------- | ------------------------------------- |
| className | string | false    | -        | The extended className for component. |
| lineWidth | number | false    | 10       | The circle line-width.                |
| lineCap   | enum   | false    | 'square' | The circle line-cap.                  |
| value     | number | false    | 0        | Circle deg, default 0.                |
| onChange  | func   | false    | noop     | The change handler.                   |


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
              value={value}
              name=""
              id=""
            />
          </div>
          <div className="is-component">
            <ReactSvgCircle
              lineWidth={10}
              lineCap="round"
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

## fix ios9 debug
- babel `const` error
  ```json
  ["@babel/preset-env", {
    "targets": {
      "browsers": ["last 2 versions"],
    }
  }]
  ```
- babel `rest(..args)`
  ```json
  "@babel/plugin-transform-parameters"
  ```

## documentation
- https://afeiship.github.io/react-svg-circle/

## resources
- https://codepen.io/depthdev/pen/bNyxzG
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-linecap
- https://www.zhangxinxu.com/wordpress/2014/08/svg-viewport-viewbox-preserveaspectratio/


## license
Code released under [the MIT license](https://github.com/afeiship/react-svg-circle/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-svg-circle
[version-url]: https://npmjs.org/package/@feizheng/react-svg-circle

[license-image]: https://img.shields.io/npm/l/@feizheng/react-svg-circle
[license-url]: https://github.com/afeiship/react-svg-circle/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-svg-circle
[size-url]: https://github.com/afeiship/react-svg-circle/blob/master/dist/react-svg-circle.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-svg-circle
[download-url]: https://www.npmjs.com/package/@feizheng/react-svg-circle
