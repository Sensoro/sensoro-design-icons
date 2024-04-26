// This icon file is generated automatically.
import * as React from 'react';
import OrderedListOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OrderedListOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrderedListOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrderedListOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrderedListOutlined);

RefIcon.displayName = 'OrderedListOutlined';

export default RefIcon;
