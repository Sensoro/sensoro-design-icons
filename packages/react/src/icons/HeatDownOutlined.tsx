// This icon file is generated automatically.
import * as React from 'react';
import HeatDownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HeatDownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeatDownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeatDownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeatDownOutlined);

RefIcon.displayName = 'HeatDownOutlined';

export default RefIcon;
