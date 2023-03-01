import * as SenIcons from '@sensoro-design/icons/es/icons';

export const all = Object.keys(SenIcons)
  .map((n) => n.replace(/(Outlined|Filled|TwoTone|Purely)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const direction: string[] = [
  'Up',
  'Down',
  'Left',
  'Right',
  'ArrowUpPro',
  'ArrowDownPro',
  'ArrowLeftPro',
  'ArrowRightPro',
  'Check',
  'Close',
  'CloseCircle',
  'InfoCircle',
  'ExclamationCircle',
  'CheckCircle',
];

const car = ['Car', 'CarCamera', 'CarRecord', 'CarUnknown', 'CarExclamationCircle', 'CarPen', 'CarQuestionCircle'];

const built = ['Building', 'Employer', 'IllegalBuilding'];

/** 界面操作 */
const operation = [
  'Upload',
  'Download',
  'Minus',
  'Plus',
  'MenuUnfold',
  'MenuFold',
  'Logout',
  'Login',
  'Delete',
  'Form',
  'Swap',
  'Sort',
  'ShareAlt',
  'Batch',
  'Reload',
  'Search',
  'Holder',
  'Save',
  'Stop',
  'Clear',
  'Copy',
  'Drag',
  'Setting',
  'Star',
  'Lock',
  'Unlock',
  'Filter',
  'EyeInvisible',
  'Eye',
  'ToTop',
  'Device',
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
  'FolderOpen',
  'FileUser',
  'File',
  'FilePng',
  'FileJpg',
  'FileJpeg',
  'FilePro',
  'FileSeal',
  'FileCheck',
  'FileTime',
  'FilePen',
  'FileSearch',
  'FileReport',
];

const user = [
  'User',
  'UserPlusCircle',
  'UserMinusCircle',
  'UserSafetyCertificate',
  'UserSetting',
  'UserManage',
  'UserForeign',
  'UserLeaveEarly',
  'UserVip',
  'UserTime',
  'UserExclamationCircle',
];

const device = [
  'GasSensor',
  'SmartBox',
  'LinsAccess',
  'Sleep',
  'Controller',
  'Hydrolab',
  'SmartWatch',
  'Pm25',
  'HumanTrafficVideo',
  'Lpg',
  'TrackingDevice',
  'Pm',
  'ArcDetection',
  'DomeCamera',
  'CardReader',
  'Inclination',
  'Chip',
  'NaturalGas',
  'FireHydraulics',
  'ManholeCover',
  'Co',
  'Ch4',
  'Nh3',
  'Co2',
  'Rainfall',
  'WaterLevelDetection',
  'O2',
  'TemperaturePatch',
  'Thermometer',
  'MercuryThermometer',
  'AudibleAlarmHost',
  'Infrared',
  'FireHost',
  'Leaking',
  'Smoke',
  'ContinuityDetection',
  'Spray',
  'DriveRecorder',
  'ManualAlarmCircle',
  'ElectricityMeter',
  'Geomagnetism',
  'BaseStation',
  'FireCamera',
  'FaceCamera',
  'AlertCamera',
  'FullTargetCamera',
  'VirtualCamera',
  'Fire',
  'Lightning',
  'SafetyCertificate',
  'GasAlarm',
  'EnvironmentalMonitoring',
  'EpidemicProtection',
  'ParkingLot',
  'SmartLightPole',
  'Aim',
  'Medical',
  'Drone',
  'IntelligentAccess',
  'SmartWaterMeter',
  'GasSensorController',
  'RemoteFireMonitoring',
  'PartlyCloudy',
  'DoorLock',
  'FireHydrant',
  'Database',
  'WeatherStation',
  'ForestFireCamera',
  'VesselIllegalWork',
  'AircircuitBreaker',
  'ElectricalFire',
  'Elevator',
  'VideoCamera',
  'WalkieTalkie',
  'GasMonitoring',
  'DronePro',
];

const suggestion: string[] = [
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
  ...user,
  ...empty,
];

const other = all.filter((n) => !datum.includes(n));

export const categories = {
  direction,
  suggestion,
  operation,
  file,
  user,
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
