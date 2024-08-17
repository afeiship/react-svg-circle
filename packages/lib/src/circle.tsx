// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, SVGAttributes } from 'react';

const CLASS_NAME = 'react-circle';
const uuid = () => Math.random().toString(36).slice(2, 9);

type GradientItem = {
  offset: number;
  value: string;
};


export type ReactCircleProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The circle thickness.
   */
  thickness?: number;
  /**
   * The circle line-cap.
   */
  lineCap?: 'butt' | 'round' | 'square' | 'inherit';
  /**
   * The circle color.
   */
  color?: string;
  /**
   * The linear-gradient colors.
   */
  colors?: GradientItem[];
  /**
   * The circle radius.
   */
  radius?: number;
  /**
   * The circle deg.
   */
  value: number;
  /**
   * The transform rotate.
   */
  rotate?: number;
  /**
   * The transform color rotate.
   */
  colorRotate?: number;
} & SVGAttributes<SVGCircleElement>;

export default class ReactCircle extends Component<ReactCircleProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    color: '#eee',
    thickness: 1,
    value: 100,
    lineCap: 'inherit',
    rotate: -90,
  };

  private readonly id: string;

  constructor(props: ReactCircleProps) {
    super(props);
    this.id = `${CLASS_NAME}-${uuid()}-gradient`;
  }


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
    const { thickness, radius } = this.props;
    const r = radius || (100 - thickness!) / 2;
    const c = 2 * Math.PI * r;
    return {
      r,
      c,
      offset: c - (c * this.degValue) / 360,
    };
  }


  render() {
    const {
      className,
      children,
      color,
      colors,
      thickness,
      lineCap,
      value,
      rotate,
      colorRotate,
      radius,
      ...rest
    } = this.props;

    const { r, c, offset } = this.info;

    return (
      <>
        <circle
          data-component={CLASS_NAME}
          className={cx(CLASS_NAME, className)}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={`url(#${this.id})`}
          strokeLinecap={lineCap}
          strokeWidth={thickness}
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(${rotate} 50 50)`}
          {...rest}
        >
          {children}
        </circle>
        <defs>
          <linearGradient id={this.id} gradientTransform={`rotate(${colorRotate})`}>
            {this.colors.map((item, index) => <stop key={index} offset={`${item.offset}%`} stopColor={item.value} />)}
          </linearGradient>
        </defs>
      </>
    );
  }
}
