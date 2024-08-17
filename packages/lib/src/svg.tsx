import cx from 'classnames';
import React, { ReactNode, Component, SVGAttributes } from 'react';

const CLASS_NAME = 'react-svg';
export type ReactSvgProps = {
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
   * The transform rotate.
   */
  rotate?: number;
} & SVGAttributes<SVGElement>;

export default class ReactSvg extends Component<ReactSvgProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    rotate: 0,
  };

  render() {
    const { className, children, rotate, ...rest } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        viewBox="0 0 100 100"
        transform={`rotate(${rotate})`}
        {...rest}>
        {children}
      </svg>
    );
  }
}
