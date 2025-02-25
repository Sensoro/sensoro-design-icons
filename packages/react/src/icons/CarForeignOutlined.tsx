// This icon file is generated automatically.
import * as React from 'react';
import CarForeignOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CarForeignOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarForeignOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarForeignOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarForeignOutlined);

RefIcon.displayName = 'CarForeignOutlined';

export default RefIcon;
