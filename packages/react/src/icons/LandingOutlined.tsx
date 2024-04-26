// This icon file is generated automatically.
import * as React from 'react';
import LandingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LandingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LandingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LandingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LandingOutlined);

RefIcon.displayName = 'LandingOutlined';

export default RefIcon;
