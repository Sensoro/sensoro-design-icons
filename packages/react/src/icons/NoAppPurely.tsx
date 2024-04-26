// This icon file is generated automatically.
import * as React from 'react';
import NoAppPurelySvg from '@sensoro-design/icons-svg/es/asn/NoAppPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoAppPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoAppPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoAppPurely);

RefIcon.displayName = 'NoAppPurely';

export default RefIcon;
