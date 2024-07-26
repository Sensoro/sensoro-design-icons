// This icon file is generated automatically.
import * as React from 'react';
import CarFocusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CarFocusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarFocusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarFocusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarFocusOutlined);

RefIcon.displayName = 'CarFocusOutlined';

export default RefIcon;
