// This icon file is generated automatically.
import * as React from 'react';
import SuppliesOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SuppliesOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SuppliesOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SuppliesOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SuppliesOutlined);

RefIcon.displayName = 'SuppliesOutlined';

export default RefIcon;
