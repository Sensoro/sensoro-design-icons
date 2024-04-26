// This icon file is generated automatically.
import * as React from 'react';
import HeavyFogOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HeavyFogOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeavyFogOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeavyFogOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeavyFogOutlined);

RefIcon.displayName = 'HeavyFogOutlined';

export default RefIcon;
