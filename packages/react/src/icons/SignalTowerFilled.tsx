// This icon file is generated automatically.
import * as React from 'react';
import SignalTowerFilledSvg from '@sensoro-design/icons-svg/es/asn/SignalTowerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SignalTowerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SignalTowerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SignalTowerFilled);

RefIcon.displayName = 'SignalTowerFilled';

export default RefIcon;
