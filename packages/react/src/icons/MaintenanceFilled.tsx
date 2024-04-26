// This icon file is generated automatically.
import * as React from 'react';
import MaintenanceFilledSvg from '@sensoro-design/icons-svg/es/asn/MaintenanceFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MaintenanceFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MaintenanceFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MaintenanceFilled);

RefIcon.displayName = 'MaintenanceFilled';

export default RefIcon;
