// This icon file is generated automatically.
import * as React from 'react';
import BlizzardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BlizzardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BlizzardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BlizzardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BlizzardOutlined);

RefIcon.displayName = 'BlizzardOutlined';

export default RefIcon;
