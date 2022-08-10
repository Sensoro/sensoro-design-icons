import * as SenIcons from '@sensoro-design/icons/es/icons';

export const all = Object.keys(SenIcons)
  .map((n) => n.replace(/(Outlined|Filled|TwoTone|Purely)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const direction: string[] = [
  'Up',
  'Down',
  'Left',
  'Right',
  'UpCircle',
  'DownCircle',
  'LeftCircle',
  'RightCircle',
  'CaretUp',
  'CaretDown',
  'CaretLeft',
  'CaretRight',
  'MenuFold',
  'MenuUnfold',
  'DoubleLeft',
  'DoubleRight',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUpPro',
  'ArrowDownPro',
  'ArrowLeftPro',
  'ArrowRightPro',
  'Swap',
  'SwapLeft',
  'SwapRight',
  'LeftUp',
  'LeftDown',
  'RightUp',
  'RightDown',
];

const car = ['Car', 'CarCamera', 'CarRecord', 'CarUnknown', 'CarExclamationCircle', 'CarPen', 'CarQuestionCircle'];

const built = ['Building', 'Employer', 'IllegalBuilding'];

/** 操作类 */
const operation = [
  'Delete',
  'Pen',
  'Form',
  'Edit',
  'Search',
  'Play',
  'PlayCircle',
  'Pause',
  'PauseCircle',
  'Rotation',
  'RotationClose',
  'Copy',
  'Download',
  'AlignCenter',
  'AlignLeft',
  'AlignRight',
  'Fullscreen',
  'FullscreenPro',
  'FullscreenExit',
  'FullscreenExitPro',
  'Upload',
  'Filter',
];

const empty = [
  'NoAlarm',
  'NoApp',
  'NoCar',
  'NoCars',
  'NoData',
  'NoDevice',
  'NoImage',
  'NoPerson',
  'NoPersons',
  'NoVideo',
];

const menu = [
  'MoneyWatch',
  'BaseStation',
  'Atlas',
  'VideoCamera',
  'DataAssets',
  'DigitalMedia',
  'Alert',
  'GeoLocation',
  'Global',
  'Iot',
  'HashrateCenter',
];

/** 音影类 */
const audioVideo = [
  'Pause',
  'PauseCircle',
  'Sound',
  'SoundSmall',
  'Mute',
  'Play',
  'PlayCircle',
  'PlayCirclePro',
  'Video',
  'VideoStop',
  'StepBackward',
  'StepForward',
];

const file = [
  'FileAdd',
  'FileDone',
  'FileExcel',
  'FileGif',
  'File',
  'FilePro',
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
  'FileTime',
  'FilePen',
  'FileCheck',
  'FileSeal',
  'FileVideo',
  'FileAudio',
  'FileWarning',
  'FileTemp',
  'FileInfoCircle',
  'FileInfo',
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
  'Info',
  'InfoCircle',
  'Exclamation',
  'ExclamationCircle',
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

const logo: string[] = ['Github'];

const datum = [
  ...direction,
  ...suggestion,
  ...audioVideo,
  ...data,
  ...logo,
  ...car,
  ...built,
  ...menu,
  ...operation,
  ...device,
  ...file,
  ...empty,
];

const other = all.filter((n) => !datum.includes(n));

export const categories = {
  direction,
  suggestion,
  operation,
  file,
  data,
  car,
  built,
  menu,
  device,
  audioVideo,
  logo,
  other,
  empty,
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
