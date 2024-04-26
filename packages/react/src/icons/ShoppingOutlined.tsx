// This icon file is generated automatically.
import * as React from 'react';
import ShoppingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShoppingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShoppingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShoppingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShoppingOutlined);

RefIcon.displayName = 'ShoppingOutlined';

export default RefIcon;
