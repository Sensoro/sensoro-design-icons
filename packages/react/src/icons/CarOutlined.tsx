// This icon file is generated automatically.
import * as React from 'react';
import CarOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CarOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarOutlined);

RefIcon.displayName = 'CarOutlined';

export default RefIcon;
