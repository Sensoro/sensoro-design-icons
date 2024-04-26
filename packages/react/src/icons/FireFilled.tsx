// This icon file is generated automatically.
import * as React from 'react';
import FireFilledSvg from '@sensoro-design/icons-svg/es/asn/FireFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireFilled);

RefIcon.displayName = 'FireFilled';

export default RefIcon;
