// This icon file is generated automatically.
import * as React from 'react';
import FiremenFilledSvg from '@sensoro-design/icons-svg/es/asn/FiremenFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FiremenFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FiremenFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FiremenFilled);

RefIcon.displayName = 'FiremenFilled';

export default RefIcon;
