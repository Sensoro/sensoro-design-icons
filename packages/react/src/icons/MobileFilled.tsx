// This icon file is generated automatically.
import * as React from 'react';
import MobileFilledSvg from '@sensoro-design/icons-svg/es/asn/MobileFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MobileFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MobileFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MobileFilled);

RefIcon.displayName = 'MobileFilled';

export default RefIcon;
