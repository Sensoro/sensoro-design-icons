// This icon file is generated automatically.
import * as React from 'react';
import CarParkOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CarParkOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarParkOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarParkOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarParkOutlined);

RefIcon.displayName = 'CarParkOutlined';

export default RefIcon;
