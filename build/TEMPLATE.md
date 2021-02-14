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
__GENERATE_DOCS__

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
__GENERATE_DAPP__
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
- https://codepen.io/afeiship/pen/JjKeegV


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
