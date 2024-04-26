// This icon file is generated automatically.
import * as React from 'react';
import SleepFilledSvg from '@sensoro-design/icons-svg/es/asn/SleepFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SleepFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SleepFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SleepFilled);

RefIcon.displayName = 'SleepFilled';

export default RefIcon;
