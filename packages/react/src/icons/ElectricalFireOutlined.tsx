// This icon file is generated automatically.
import * as React from 'react';
import ElectricalFireOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ElectricalFireOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElectricalFireOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElectricalFireOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElectricalFireOutlined);

RefIcon.displayName = 'ElectricalFireOutlined';

export default RefIcon;
