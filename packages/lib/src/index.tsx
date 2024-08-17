import cx from 'classnames';
import React, { ReactNode, Component, SVGAttributes } from 'react';

const CLASS_NAME = 'react-svg-circle';
const uuid = () => Math.random().toString(36).slice(2, 9);

type GradientItem = {
  offset: number;
  value: string;
};

export type ReactSvgCircleProps = {
  /**
   * The circle line-width.
   */
  thickness?: number;
  /**
   * The circle line-cap.
   */
  lineCap?: 'butt' | 'round' | 'square' | 'inherit';
  /**
   * Circle deg, default 0.(range: 0 - 360)
   */
  value: number;
  /**
   * Any other circle(main element) props.
   */
  circleProps?: SVGAttributes<SVGCircleElement>;
  /**
   * The linear-gradient props.
   */
  linearGradientProps?: SVGAttributes<SVGLinearGradientElement>;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The circle linear-gradient.
   */
  color?: string;
  /**
   * The circle linear-gradient colors.
   */
  colors?: GradientItem[];
} & SVGAttributes<SVGElement>;

export default class ReactSvgCircle extends Component<ReactSvgCircleProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    thickness: 10,
    lineCap: 'inherit',
    value: 0,
  };

  private readonly id: string;

  get colors() {
    const { color, colors } = this.props;
    if (Array.isArray(colors)) return colors;
    return [
      { offset: 0, value: color },
      { offset: 100, value: color },
    ];
  }

  get degValue() {
    const { value } = this.props;
    return value * 360 / 100;
  }

  get info() {
    const { thickness } = this.props;
    const r = (100 - thickness!) / 2;
    const c = 2 * Math.PI * r;
    return {
      r,
      c,
      deg: c - (c * this.degValue) / 360,
    };
  }

  constructor(props) {
    super(props);
    this.id = `${CLASS_NAME}-${uuid()}-gradient`;
  }

  render() {
    const {
      className,
      thickness,
      lineCap,
      value,
      color,
      colors,
      children,
      circleProps,
      linearGradientProps,
      ...props
    } = this.props;
    const { r, c, deg } = this.info;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        viewBox="0 0 100 100"
        {...props}>
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={`url(#${this.id})`}
          strokeLinecap={lineCap}
          strokeWidth={thickness}
          strokeDasharray={c}
          strokeDashoffset={deg}
          {...circleProps}
        />
        {children}
        <defs>
          <linearGradient id={this.id} gradientTransform="rotate(90)" {...linearGradientProps}>
            {this.colors.map((item, index) => <stop key={index} offset={`${item.offset}%`} stopColor={item.value} />)}
          </linearGradient>
        </defs>
      </svg>
    );
  }
}
