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
  direction: '方向与提示',
  edit: '编辑类图标',
  operation: '界面操作',
  map: '地图&位置',
  file: '文件类图标',
  user: '人员&用户',
  device: '设备类图标',
  regionalManagement: '区域管理',
  deviceStatus: '设备状态&操作',
  universal: '网站通用图标',
  other: '其他',
  audioVideo: '音影类图标',
  gallery: '图库',
  weather: '天气',
  empty: '空状态',
  firefighting: '消防类',
  navigation: '网站导航',
  dataAssets: '数据资产',
  drones: '无人机',
  lineLegend: '线形图例',
  otherBusiness: '其他业务',
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
