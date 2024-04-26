// This icon file is generated automatically.
import * as React from 'react';
import DriveRecorderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DriveRecorderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DriveRecorderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DriveRecorderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DriveRecorderOutlined);

RefIcon.displayName = 'DriveRecorderOutlined';

export default RefIcon;
