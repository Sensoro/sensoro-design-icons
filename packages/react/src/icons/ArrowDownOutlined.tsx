// This icon file is generated automatically.
import * as React from 'react';
import ArrowDownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowDownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowDownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowDownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowDownOutlined);

RefIcon.displayName = 'ArrowDownOutlined';

export default RefIcon;
