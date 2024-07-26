// This icon file is generated automatically.
import * as React from 'react';
import SignalTowerPurelySvg from '@sensoro-design/icons-svg/es/asn/SignalTowerPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SignalTowerPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SignalTowerPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SignalTowerPurely);

RefIcon.displayName = 'SignalTowerPurely';

export default RefIcon;
