// This icon file is generated automatically.
import * as React from 'react';
import AimFilledSvg from '@sensoro-design/icons-svg/es/asn/AimFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AimFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AimFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AimFilled);

RefIcon.displayName = 'AimFilled';

export default RefIcon;
