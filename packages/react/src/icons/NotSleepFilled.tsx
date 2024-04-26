// This icon file is generated automatically.
import * as React from 'react';
import NotSleepFilledSvg from '@sensoro-design/icons-svg/es/asn/NotSleepFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NotSleepFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NotSleepFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NotSleepFilled);

RefIcon.displayName = 'NotSleepFilled';

export default RefIcon;
