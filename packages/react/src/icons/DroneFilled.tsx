// This icon file is generated automatically.
import * as React from 'react';
import DroneFilledSvg from '@sensoro-design/icons-svg/es/asn/DroneFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DroneFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DroneFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DroneFilled);

RefIcon.displayName = 'DroneFilled';

export default RefIcon;
