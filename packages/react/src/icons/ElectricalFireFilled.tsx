// This icon file is generated automatically.
import * as React from 'react';
import ElectricalFireFilledSvg from '@sensoro-design/icons-svg/es/asn/ElectricalFireFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElectricalFireFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElectricalFireFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElectricalFireFilled);

RefIcon.displayName = 'ElectricalFireFilled';

export default RefIcon;
