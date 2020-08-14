import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';

const ENUM_CAPS = ['butt', 'round', 'square', 'inherit'];
const CLASS_NAME = 'react-svg-circle';

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
     * The circle line-cap.
     */
    lineCap: PropTypes.oneOf(ENUM_CAPS),
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
    lineCap: 'square',
    value: 0,
    onChange: noop
  };

  get info() {
    const { value, lineWidth } = this.props;
    const r = (100 - lineWidth) / 2;
    const c = 2 * Math.PI * r;
    return {
      r,
      c,
      deg: c - (c * value) / 360
    };
  }

  componentDidMount() {
    const { value } = this.props;
    // this.update(value);
  }

  render() {
    const {
      className,
      lineWidth,
      lineCap,
      value,
      onChange,
      svgExtra,
      svgProps,
      ...props
    } = this.props;
    const { r, c, deg } = this.info;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={`${CLASS_NAME}__svg`}
          viewBox="0 0 100 100"
          {...svgProps}>
          <circle
            cx="50"
            cy="50"
            r={r}
            strokeLinecap={lineCap}
            strokeWidth={lineWidth}
            strokeDasharray={c}
            strokeDashoffset={deg}
          />
          {svgExtra}
        </svg>
      </div>
    );
  }
}
