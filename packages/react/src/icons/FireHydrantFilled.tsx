// This icon file is generated automatically.
import * as React from 'react';
import FireHydrantFilledSvg from '@sensoro-design/icons-svg/es/asn/FireHydrantFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHydrantFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHydrantFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHydrantFilled);

RefIcon.displayName = 'FireHydrantFilled';

export default RefIcon;
