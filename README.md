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

## usage
1. import css
  ```scss
  @import "~@jswork/react-svg-circle/dist/style.css";

  // or use sass
  @import "~@jswork/react-svg-circle/dist/style.scss";
  ```
2. import js
  ```js
  import ReactSvgCircle from '@jswork/react-svg-circle';
  import '@jswork/react-svg-circle/dist/style.scss';
  import { useState } from 'react';

  function App() {
    const [value, setValue] = useState(20);
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <section className="w-100 mx-auto p-4 y-2">
          <nav className="text-center bg-gray-200 py-2 rounded-md">
            <input
              type="range"
              onChange={(e) => {
                const { value } = e.target;
                setValue(parseInt(value));
              }}
              step="1"
              min="0"
              max="100"
              value={value}
              name=""
              id=""
            />
          </nav>
          <div className="debug-red *:bg-green-200 p-2 x-5 rounded-md">
            <ReactSvgCircle lineWidth={6} lineCap="inherit" value={value} stroke="#007aff" className="text-green-600">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle">
                {value}%
              </text>
            </ReactSvgCircle>
            <ReactSvgCircle lineWidth={2} lineCap="inherit" value={value} stroke={{ start: '#007aff', end: '#ff5722' }} className="text-green-600">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle">
                {value}%
              </text>
            </ReactSvgCircle>
          </div>
        </section>
      </div>
    );
  }

  export default App;
  ```

## preview
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
