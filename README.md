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
  import { ReactSvg, ReactCircle } from '@jswork/react-svg-circle/main';
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
          <div className="*:rounded grid grid-cols-2 gap-4 p-2 border border-blue-100 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all">
            <ReactSvg width="100" height="100" className="size-full">
              <ReactCircle thickness={8} value={100} color="#dde" />
              <ReactCircle thickness={5} value={100} radius={36} color="orange" />
              <ReactCircle thickness={3} color="green" value={value} />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle">
                {value}%
              </text>
            </ReactSvg>
            <ReactSvg width="100" height="100" className="size-full">
              <ReactCircle thickness={10} value={100} color="#ddd" />
              <ReactCircle thickness={10}
                           colorRotate={90}
                           lineCap="round"
                           colors={[
                             { value: '#007aff', offset: 0 },
                             { value: '#ff5722', offset: 100 },
                           ]}
                           value={value}
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle">
                {value}%
              </text>
            </ReactSvg>
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
