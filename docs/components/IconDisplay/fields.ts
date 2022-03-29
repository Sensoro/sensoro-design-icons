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
  'MenuUnfold',
  'DoubleLeft',
  'DoubleRight',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
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
  'RotationClose',
];

const file = [
  'FileAdd',
  'FileDone',
  'FileExcel',
  'FileGif',
  'File',
  'FileZip',
  'FileUnknown',
  'FileExclamation',
  'FileWord',
  'FilePdf',
  'FileText',
  'FileSync',
  'FileImage',
  'FileJpg',
  'FileMarkdown',
  'FilePpt',
  'FileProtect',
  'FileSearch',
];

const device = [
  'Drone',
  'VideoCamera',
  'AircircuitBreaker',
  'Smoke',
  'WaterFlow',
  'FireHydrant',
  'FireCamera',
  'WaterLevel',
  'ElectricalFire',
  'Co',
  'Co2',
  'O2',
  'Ch4',
  'Pm',
  'Nh3',
  'Thermometer',
  'SmartWatch',
  'IntelligentAccess',
  'AudibleAlarm',
  'TemperaturePatch',
  'SmartDoorLock',
  'SmartBox',
  'VirtualCamera',
  'SmartLightPole',
  'Hydrolab',
  'Lpg',
  'ManualAlarmCircle',
  'ManualAlarmSquare',
  'FireHost',
  'Leaking',
  'WeatherStation',
  'SmartWaterMeter',
  'ParkingLot',
  'GasSensor',
  'ManholeCover',
  'DoorLock',
  'FireHydraulics',
  'GasSensorController',
  'AlarmHost',
  'AlertCamera',
  'FaceCamera',
  'FullTarget',
  'FullTargetCamera',
  'PersonCamera',
  'DomeCamera',
  'AudibleAlarmHost',
  'Infrared',
  'InfraredHost',
  'Sleep',
  'LinsAccess',
  'Controller',
  'HumanTrafficVideo',
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

const datum = [
  ...direction,
  ...suggestion,
  ...data,
  ...logo,
  ...operation,
  ...device,
  ...file,
];

const other = all.filter(n => !datum.includes(n));

export const categories = {
  direction,
  suggestion,
  operation,
  file,
  data,
  device,
  logo,
  other,
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
