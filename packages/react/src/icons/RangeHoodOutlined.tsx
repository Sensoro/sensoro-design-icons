// This icon file is generated automatically.
import * as React from 'react';
import RangeHoodOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RangeHoodOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RangeHoodOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RangeHoodOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RangeHoodOutlined);

RefIcon.displayName = 'RangeHoodOutlined';

export default RefIcon;
