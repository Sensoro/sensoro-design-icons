import React, { useState } from 'react';
import { message } from 'antd';
import { CopyableIcon } from './CopyableIcon';

import type { CategoriesKeys } from './fields';
import type { ThemeType } from './';

export interface CategoriesProps {
  title: CategoriesKeys;
  icons: string[];
  newIcons: string[];
  theme: ThemeType;
}

const titleMap = {
  direction: '方向性图标',
  operation: '操作类图标',
  suggestion: '提示建议性图标',
  data: '数据类图标',
  file: '文件类图标',
  device: '设备类图标',
  menu: '菜单类图标',
  other: '网站通用图标',
  logo: '品牌和标识',
  audioVideo: '音影类图标',
  empty: '空状态',
};

export const Category: React.FC<CategoriesProps> = ({ title, icons = [], newIcons = [], theme }) => {
  const handleCopied = (type: string, text: string) => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> copied 🎉
      </span>,
    );
  };

  return (
    <>
      <h3 style={{ margin: '1.6em 0px 0.6em' }}>{titleMap[title]}</h3>
      <ul className="s-icons-list">
        {icons.map((name) => (
          <CopyableIcon
            key={name}
            name={name}
            theme={theme}
            isNew={newIcons.indexOf(name) >= 0}
            onCopied={handleCopied}
          />
        ))}
      </ul>
    </>
  );
};
