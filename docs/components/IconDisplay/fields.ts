import * as SenIcons from '@sensoro-design/icons/es/icons';

export const all = Object.keys(SenIcons)
  .map(n => n.replace(/(Outlined|Filled|TwoTone)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const direction: string[] = [];

const suggestion: string[] = [];

const editor: string[] = [];

const data: string[] = [];

const logo: string[] = [];

const datum = [...direction, ...suggestion, ...editor, ...data, ...logo];

const other = all.filter(n => !datum.includes(n));

export const categories = {
  direction,
  suggestion,
  editor,
  data,
  logo,
  other,
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
