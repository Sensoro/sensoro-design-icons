// This icon file is generated automatically.
import * as React from 'react';
import OrbitOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OrbitOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrbitOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrbitOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrbitOutlined);

RefIcon.displayName = 'OrbitOutlined';

export default RefIcon;
