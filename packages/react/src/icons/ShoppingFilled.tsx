// This icon file is generated automatically.
import * as React from 'react';
import ShoppingFilledSvg from '@sensoro-design/icons-svg/es/asn/ShoppingFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShoppingFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShoppingFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShoppingFilled);

RefIcon.displayName = 'ShoppingFilled';

export default RefIcon;
