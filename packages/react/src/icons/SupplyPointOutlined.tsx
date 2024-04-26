// This icon file is generated automatically.
import * as React from 'react';
import SupplyPointOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SupplyPointOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SupplyPointOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SupplyPointOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SupplyPointOutlined);

RefIcon.displayName = 'SupplyPointOutlined';

export default RefIcon;
