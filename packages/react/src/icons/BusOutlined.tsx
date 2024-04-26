// This icon file is generated automatically.
import * as React from 'react';
import BusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BusOutlined);

RefIcon.displayName = 'BusOutlined';

export default RefIcon;
