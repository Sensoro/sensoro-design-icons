import React from 'react';
import classNames from '@pansy/classnames';

import IconBase from './IconBase';
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';
import Context from './Context';

import type { IconBaseProps } from './Icon';
import type { IconDefinition } from '@sensoro-design/icons-svg/lib/types';

export interface SensoroIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends SensoroIconProps {
  icon: IconDefinition;
}

// Initial setting
// should move it to antd main repo?
setTwoToneColor('#1890ff');

interface IconBaseComponent<Props>
  extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> {
  getTwoToneColor: typeof getTwoToneColor;
  setTwoToneColor: typeof setTwoToneColor;
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,

    tabIndex,
    onClick,

    // other
    twoToneColor,

    ...restProps
  } = props;

  const { prefixCls = 's-icon' } = React.useContext(Context);

  const classString = classNames(
    prefixCls,
    'anticon',
    {
      [`${prefixCls}-${icon.name}`]: !!icon.name,
      [`${prefixCls}-spin`]: !!spin || icon.name === 'loading',
    },
    className,
  );

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;

  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

  return (
    <span
      role="img"
      aria-label={icon.name}
      {...restProps}
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      <IconBase icon={icon} primaryColor={primaryColor} secondaryColor={secondaryColor} style={svgStyle} />
    </span>
  );
}) as IconBaseComponent<IconComponentProps>;

Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
