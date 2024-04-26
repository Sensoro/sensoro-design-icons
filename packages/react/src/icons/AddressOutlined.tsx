// This icon file is generated automatically.
import * as React from 'react';
import AddressOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AddressOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AddressOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AddressOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AddressOutlined);

RefIcon.displayName = 'AddressOutlined';

export default RefIcon;
