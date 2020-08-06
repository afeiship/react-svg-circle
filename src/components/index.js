import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';

const CLASS_NAME = 'react-svg-circle';
const arc = (x, y, r, s, f, rotate) => {
  const coords = (degrees) => {
    const radians = ((degrees - (90 - (rotate || 0))) * Math.PI) / 180.0;
    return {
      x: x + r * Math.cos(radians),
      y: y + r * Math.sin(radians)
    };
  };
  let start = coords(s),
    finish = coords(f);
  return [
    'M',
    start.x,
    start.y,
    'A',
    r,
    r,
    0,
    ~~(f - s > 180),
    1,
    finish.x,
    finish.y
  ].join(' ');
};

export default class ReactSvgCircle extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The circle line-width.
     */
    lineWidth: PropTypes.number,
    /**
     * Circle deg, default 0.
     */
    value: PropTypes.number,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    lineWidth: 10,
    value: 0,
    onChange: noop
  };

  componentDidMount() {
    const { value } = this.props;
    this.update(value);
  }

  update(inValue) {
    const { lineWidth } = this.props;
    const r = 60 - lineWidth / 2;
    const value =
      inValue === 360
        ? arc(60, 60, r, 0, 359) + 'z'
        : arc(60, 60, r, 0, inValue);
    this.svg.setAttribute('d', value);
  }

  shouldComponentUpdate(inNextProps) {
    const { value } = inNextProps;
    value !== this.props.value && this.update(value);
    return true;
  }

  render() {
    const {
      className,
      lineWidth,
      value,
      onChange,
      svgExtra,
      svgProps,
      ...props
    } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <svg
          className={`${CLASS_NAME}__svg`}
          viewBox="0 0 120 120"
          {...svgProps}>
          <path ref={(svg) => (this.svg = svg)} strokeWidth={lineWidth} />
          {svgExtra}
        </svg>
      </div>
    );
  }
}
