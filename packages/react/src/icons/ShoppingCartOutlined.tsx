// This icon file is generated automatically.
import * as React from 'react';
import ShoppingCartOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShoppingCartOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShoppingCartOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShoppingCartOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShoppingCartOutlined);

RefIcon.displayName = 'ShoppingCartOutlined';

export default RefIcon;
