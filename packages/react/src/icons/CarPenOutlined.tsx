// This icon file is generated automatically.
import * as React from 'react';
import CarPenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CarPenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarPenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarPenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarPenOutlined);

RefIcon.displayName = 'CarPenOutlined';

export default RefIcon;
