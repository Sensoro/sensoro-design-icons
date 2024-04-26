// This icon file is generated automatically.
import * as React from 'react';
import FireTruckOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireTruckOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireTruckOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireTruckOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireTruckOutlined);

RefIcon.displayName = 'FireTruckOutlined';

export default RefIcon;
