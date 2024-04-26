// This icon file is generated automatically.
import * as React from 'react';
import SortOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SortOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SortOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SortOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SortOutlined);

RefIcon.displayName = 'SortOutlined';

export default RefIcon;
