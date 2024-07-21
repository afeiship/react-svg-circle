// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes, SVGAttributes } from 'react';

const CLASS_NAME = 'react-svg-circle';
const uuid = () => Math.random().toString(36).slice(2, 9);
export type ReactSvgCircleProps = {
  /**
   * The circle line-width.
   */
  lineWidth?: number;
  /**
   * The circle line-cap.
   */
  lineCap?: 'butt' | 'round' | 'square' | 'inherit';
  /**
   * Circle deg, default 0.(range: 0 - 360)
   */
  value: number;
  /**
   * The change handler.
   */
  onChange?: (e: any) => void;
  /**
   * Any other svg props.
   */
  svgProps?: any
  /**
   * Any other circle(main element) props.
   */
  circleProps?: SVGAttributes<SVGElement>;
  /**
   * The children element.
   */
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactSvgCircle extends Component<ReactSvgCircleProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    lineWidth: 10,
    lineCap: 'inherit',
    value: 0,
  };

  get degValue() {
    const { value } = this.props;
    return value * 360 / 100;
  }

  get info() {
    const { lineWidth } = this.props;
    const r = (100 - lineWidth!) / 2;
    const c = 2 * Math.PI * r;
    return {
      r,
      c,
      deg: c - (c * this.degValue) / 360,
    };
  }

  shouldComponentUpdate(props) {
    const { onChange, value } = props;
    if (value !== this.props.value) {
      onChange?.({ target: { value } });
    }
    return true;
  }

  render() {
    console.log('uuid: ', uuid());
    const {
      className,
      lineWidth,
      lineCap,
      value,
      onChange,
      children,
      svgProps,
      circleProps,
      ...props
    } = this.props;
    const { r, c, deg } = this.info;
    return (
      <div
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
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
            fill="none"
            stroke="currentColor"
            strokeLinecap={lineCap}
            strokeWidth={lineWidth}
            strokeDasharray={c}
            strokeDashoffset={deg}
            {...circleProps}
          />
          {children}
        </svg>
      </div>
    );
  }
}
