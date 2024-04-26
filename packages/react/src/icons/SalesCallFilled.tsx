// This icon file is generated automatically.
import * as React from 'react';
import SalesCallFilledSvg from '@sensoro-design/icons-svg/es/asn/SalesCallFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SalesCallFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SalesCallFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SalesCallFilled);

RefIcon.displayName = 'SalesCallFilled';

export default RefIcon;
