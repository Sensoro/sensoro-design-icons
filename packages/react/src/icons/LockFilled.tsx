// This icon file is generated automatically.
import * as React from 'react';
import LockFilledSvg from '@sensoro-design/icons-svg/es/asn/LockFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LockFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LockFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LockFilled);

RefIcon.displayName = 'LockFilled';

export default RefIcon;
