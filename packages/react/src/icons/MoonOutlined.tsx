// This icon file is generated automatically.
import * as React from 'react';
import MoonOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MoonOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MoonOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MoonOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MoonOutlined);

RefIcon.displayName = 'MoonOutlined';

export default RefIcon;
