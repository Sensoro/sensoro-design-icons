import React, { useState } from 'react';
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
  suggestion: '提示建议性图标',
  editor: '编辑类图标',
  data: '数据类图标',
  other: '网站通用图标',
  logo: '品牌和标识',
}

export const Category: React.FC<CategoriesProps> = ({
  title,
  icons = [],
  newIcons = [],
  theme,
}) => {
  const  [justCopied, setJustCopied] = useState<string | null>(null);

  const handleCopied = () => {

  }

  return (
    <div>
      <h3 style={{ margin: '1.6em 0px 0.6em' }}>{titleMap[title]}</h3>
      <ul className="sen-icons-list">
        {icons.map(name => (
          <CopyableIcon
            key={name}
            name={name}
            theme={theme}
            isNew={newIcons.indexOf(name) >= 0}
            justCopied={justCopied}
            onCopied={handleCopied}
          />
        ))}
      </ul>
    </div>
  )
}
