import React, { useState } from 'react';
import Icon, * as SenIcons from '@sensoro-design/icons';
import { Radio, Empty } from 'antd';

import { Category } from './Category';
import { all } from './fields';
import { categories } from './fields';
import { FilledIcon, OutlinedIcon, TwoToneIcon, } from './ThemeIcons';

import type { RadioGroupProps } from 'antd/es/radio';
import type { Categories, CategoriesKeys } from './fields';

export enum ThemeType {
  Outlined = 'Outlined',
  Filled = 'Filled',
  TwoTone = 'TwoTone',
}

const allIcons: {
  [key: string]: any;
} = SenIcons;


export const IconDisplay: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.Outlined);
  const [searchKey, setSearchKey] = useState<string>()

  const renderCategories = () => {
    const categoriesResult = Object.keys(categories)
      .map((key) => {
        let iconList = categories[key as CategoriesKeys];

        if (searchKey) {
          const matchKey = searchKey
            .replace(new RegExp(`^<([a-zA-Z]*)\\s/>$`, 'gi'), (_, name) => name)
            .replace(/(Filled|Outlined|TwoTone)$/, '')
            .toLowerCase();
          iconList = iconList.filter(iconName => iconName.toLowerCase().includes(matchKey));
        }

        iconList = iconList.filter(icon => icon !== 'CopyrightCircle');

        return {
          category: key,
          icons: iconList.map(iconName => iconName + theme).filter(iconName => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={category as CategoriesKeys}
          theme={theme}
          icons={icons}
          newIcons={[]}
        />
      ));

    return categoriesResult.length === 0 ? <Empty style={{ margin: '2em 0' }} /> : categoriesResult;
  }

  const handleChangeTheme: RadioGroupProps['onChange'] = (e) => {
    setTheme(e.target.value);
  }

  return (
    <div>
      <Radio.Group
        value={theme}
        onChange={handleChangeTheme}
      >
        <Radio.Button value={ThemeType.Outlined}>
          <Icon component={OutlinedIcon} /> 线框风格
        </Radio.Button>
        <Radio.Button value={ThemeType.Filled}>
          <Icon component={FilledIcon} /> 实底风格
        </Radio.Button>
        <Radio.Button value={ThemeType.TwoTone}>
          <Icon component={TwoToneIcon} /> 双色风格
        </Radio.Button>
      </Radio.Group>

      {renderCategories()}
    </div>
  )
}
