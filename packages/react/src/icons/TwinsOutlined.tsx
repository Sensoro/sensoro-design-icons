// This icon file is generated automatically.
import * as React from 'react';
import TwinsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TwinsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TwinsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TwinsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TwinsOutlined);

RefIcon.displayName = 'TwinsOutlined';

export default RefIcon;
