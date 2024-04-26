// This icon file is generated automatically.
import * as React from 'react';
import FilterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FilterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilterOutlined);

RefIcon.displayName = 'FilterOutlined';

export default RefIcon;
