// This icon file is generated automatically.
import * as React from 'react';
import NoCarPurelySvg from '@sensoro-design/icons-svg/es/asn/NoCarPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoCarPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoCarPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoCarPurely);

RefIcon.displayName = 'NoCarPurely';

export default RefIcon;
