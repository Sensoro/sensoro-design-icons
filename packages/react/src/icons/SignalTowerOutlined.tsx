// This icon file is generated automatically.
import * as React from 'react';
import SignalTowerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SignalTowerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SignalTowerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SignalTowerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SignalTowerOutlined);

RefIcon.displayName = 'SignalTowerOutlined';

export default RefIcon;
