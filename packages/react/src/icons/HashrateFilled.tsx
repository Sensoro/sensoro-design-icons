// This icon file is generated automatically.
import * as React from 'react';
import HashrateFilledSvg from '@sensoro-design/icons-svg/es/asn/HashrateFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HashrateFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HashrateFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HashrateFilled);

RefIcon.displayName = 'HashrateFilled';

export default RefIcon;
