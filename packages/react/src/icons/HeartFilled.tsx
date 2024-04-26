// This icon file is generated automatically.
import * as React from 'react';
import HeartFilledSvg from '@sensoro-design/icons-svg/es/asn/HeartFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeartFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeartFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeartFilled);

RefIcon.displayName = 'HeartFilled';

export default RefIcon;
