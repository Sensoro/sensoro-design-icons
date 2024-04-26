// This icon file is generated automatically.
import * as React from 'react';
import FightFilledSvg from '@sensoro-design/icons-svg/es/asn/FightFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FightFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FightFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FightFilled);

RefIcon.displayName = 'FightFilled';

export default RefIcon;
