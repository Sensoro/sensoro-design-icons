// This icon file is generated automatically.
import * as React from 'react';
import HailOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HailOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HailOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HailOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HailOutlined);

RefIcon.displayName = 'HailOutlined';

export default RefIcon;
