// This icon file is generated automatically.
import * as React from 'react';
import FileTimeFilledSvg from '@sensoro-design/icons-svg/es/asn/FileTimeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileTimeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileTimeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileTimeFilled);

RefIcon.displayName = 'FileTimeFilled';

export default RefIcon;
