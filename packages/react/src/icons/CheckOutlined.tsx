// This icon file is generated automatically.
import * as React from 'react';
import CheckOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CheckOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CheckOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CheckOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CheckOutlined);

RefIcon.displayName = 'CheckOutlined';

export default RefIcon;
