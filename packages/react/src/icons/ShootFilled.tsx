// This icon file is generated automatically.
import * as React from 'react';
import ShootFilledSvg from '@sensoro-design/icons-svg/es/asn/ShootFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShootFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShootFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShootFilled);

RefIcon.displayName = 'ShootFilled';

export default RefIcon;
