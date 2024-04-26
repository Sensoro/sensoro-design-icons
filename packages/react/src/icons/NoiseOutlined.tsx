// This icon file is generated automatically.
import * as React from 'react';
import NoiseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NoiseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoiseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoiseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoiseOutlined);

RefIcon.displayName = 'NoiseOutlined';

export default RefIcon;
