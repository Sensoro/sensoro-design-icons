// This icon file is generated automatically.
import * as React from 'react';
import OrderListFilledSvg from '@sensoro-design/icons-svg/es/asn/OrderListFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrderListFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrderListFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrderListFilled);

RefIcon.displayName = 'OrderListFilled';

export default RefIcon;
