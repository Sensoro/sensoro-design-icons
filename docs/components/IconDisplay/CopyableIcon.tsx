import React from 'react';
import { Badge } from 'antd';
import classNames from '@pansy/classnames';
import * as senIcons from '@sensoro-design/icons';

import { ThemeType } from './';

export interface CopyableIconProps {
  name: string;
  isNew: boolean;
  justCopied: string | null;
  theme: ThemeType;
  onCopied: (type: string, text: string) => any;
}

export const CopyableIcon: React.FC<CopyableIconProps> = ({
  name,
  isNew,
  justCopied,
  theme,
  onCopied,
}) => {
  const className = classNames({
    copied: justCopied === name,
    [theme]: !!theme,
  });

  return (
    <li className={className}>
      {/* @ts-ignore */}
      {React.createElement(senIcons[name])}
      <span className="sen-icon-class">
        <Badge dot={isNew}>{name}</Badge>
      </span>
    </li>
  )
}
