// This icon file is generated automatically.
import * as React from 'react';
import DashboardFilledSvg from '@sensoro-design/icons-svg/es/asn/DashboardFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DashboardFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DashboardFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DashboardFilled);

RefIcon.displayName = 'DashboardFilled';

export default RefIcon;
