// This icon file is generated automatically.
import * as React from 'react';
import FilterFilledSvg from '@sensoro-design/icons-svg/es/asn/FilterFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilterFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilterFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilterFilled);

RefIcon.displayName = 'FilterFilled';

export default RefIcon;
