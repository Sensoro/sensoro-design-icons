// This icon file is generated automatically.
import * as React from 'react';
import FireHazardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireHazardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHazardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHazardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHazardOutlined);

RefIcon.displayName = 'FireHazardOutlined';

export default RefIcon;
