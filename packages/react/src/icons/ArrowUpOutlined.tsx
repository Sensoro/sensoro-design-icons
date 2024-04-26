// This icon file is generated automatically.
import * as React from 'react';
import ArrowUpOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowUpOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowUpOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowUpOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowUpOutlined);

RefIcon.displayName = 'ArrowUpOutlined';

export default RefIcon;
