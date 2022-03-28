import * as SenIcons from '@sensoro-design/icons/es/icons';

export const all = Object.keys(SenIcons)
  .map(n => n.replace(/(Outlined|Filled|TwoTone)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const direction: string[] = [
  'Up',
  'Down',
  'Left',
  'Right',
  'MenuFold',
  'MenuUnfold'
];

/** 操作类 */
const operation = [
  'Delete',
  'Form',
  'Play',
  'PlayCircle',
  'Pause',
  'PauseCircle',
  'Rotation',
  'RotationClose'
];

const device = [
  'VideoCamera',
  'AircircuitBreaker',
  'Smoke',
];

const suggestion: string[] = [
  'Plus',
  'Check',
  'CheckCircle',
  'CheckSquare',
  'Close',
  'CloseCircle',
  'CloseSquare',
  'PlusCircle',
  'Minus',
  'MinusCircle',
  'MinusSquare',
  'Warning',
];

const data: string[] = [];

const logo: string[] = [];

const datum = [...direction, ...suggestion, ...data, ...logo, ...operation, ...device];

const other = all.filter(n => !datum.includes(n));

export const categories = {
  direction,
  suggestion,
  operation,
  data,
  device,
  logo,
  other,
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
