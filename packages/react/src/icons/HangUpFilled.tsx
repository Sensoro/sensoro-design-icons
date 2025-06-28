// This icon file is generated automatically.
import * as React from 'react';
import HangUpFilledSvg from '@sensoro-design/icons-svg/es/asn/HangUpFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HangUpFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HangUpFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HangUpFilled);

RefIcon.displayName = 'HangUpFilled';

export default RefIcon;
