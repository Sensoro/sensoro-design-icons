// This icon file is generated automatically.
import * as React from 'react';
import MercuryThermometerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MercuryThermometerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MercuryThermometerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MercuryThermometerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MercuryThermometerOutlined);

RefIcon.displayName = 'MercuryThermometerOutlined';

export default RefIcon;
