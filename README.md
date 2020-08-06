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
| value     | object | false    | null    | Default value.                        |
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
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactSvgCircle />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-svg-circle/
