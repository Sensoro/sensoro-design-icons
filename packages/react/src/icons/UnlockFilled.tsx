// This icon file is generated automatically.
import * as React from 'react';
import UnlockFilledSvg from '@sensoro-design/icons-svg/es/asn/UnlockFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UnlockFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UnlockFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UnlockFilled);

RefIcon.displayName = 'UnlockFilled';

export default RefIcon;
