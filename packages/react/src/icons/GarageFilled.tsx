// This icon file is generated automatically.
import * as React from 'react';
import GarageFilledSvg from '@sensoro-design/icons-svg/es/asn/GarageFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GarageFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GarageFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GarageFilled);

RefIcon.displayName = 'GarageFilled';

export default RefIcon;
