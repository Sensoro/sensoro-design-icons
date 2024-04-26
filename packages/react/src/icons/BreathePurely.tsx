// This icon file is generated automatically.
import * as React from 'react';
import BreathePurelySvg from '@sensoro-design/icons-svg/es/asn/BreathePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BreathePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BreathePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BreathePurely);

RefIcon.displayName = 'BreathePurely';

export default RefIcon;
