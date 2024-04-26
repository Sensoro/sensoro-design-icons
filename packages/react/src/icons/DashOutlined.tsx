// This icon file is generated automatically.
import * as React from 'react';
import DashOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DashOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DashOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DashOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DashOutlined);

RefIcon.displayName = 'DashOutlined';

export default RefIcon;
