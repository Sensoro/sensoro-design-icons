import React from 'react';
import { AbstractNode, IconDefinition } from '@sensoro-design/icons-svg/lib/types';

import { useInsertStyles } from '../hooks/useInsertStyles';
import { getSecondaryColor, isIconDefinition, generate } from '../utils';

export interface IconProps extends Partial<TwoToneColorPaletteSetter> {
  icon: IconDefinition;
  className?: string;
  style?: React.CSSProperties;
  focusable?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean;
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

interface IconBaseComponent<P> extends React.FC<P> {
  getTwoToneColors: typeof getTwoToneColors;
  setTwoToneColors: typeof setTwoToneColors;
}

const IconBase: IconBaseComponent<IconProps> = ({
  icon,
  className,
  onClick,
  style,
  primaryColor,
  secondaryColor,
  ...restProps
}) => {
  useInsertStyles();

  let colors: TwoToneColorPalette = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }

  if (!isIconDefinition(icon)) {
    return null;
  }

  let target = icon;

  if (target && typeof target.icon === 'function') {
    target = {
      ...target,
      icon: target.icon(colors.primaryColor, colors.secondaryColor as string),
    };
  }

  return generate(target.icon as AbstractNode, `svg-${target.name}`, {
    className,
    onClick,
    style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    ...restProps,
  });
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

export default IconBase;
