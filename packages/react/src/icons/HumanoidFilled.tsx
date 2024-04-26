// This icon file is generated automatically.
import * as React from 'react';
import HumanoidFilledSvg from '@sensoro-design/icons-svg/es/asn/HumanoidFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HumanoidFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HumanoidFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HumanoidFilled);

RefIcon.displayName = 'HumanoidFilled';

export default RefIcon;
