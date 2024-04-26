// This icon file is generated automatically.
import * as React from 'react';
import ElectricalFirePurelySvg from '@sensoro-design/icons-svg/es/asn/ElectricalFirePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElectricalFirePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElectricalFirePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElectricalFirePurely);

RefIcon.displayName = 'ElectricalFirePurely';

export default RefIcon;
