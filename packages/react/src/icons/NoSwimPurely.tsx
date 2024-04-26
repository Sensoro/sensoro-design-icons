// This icon file is generated automatically.
import * as React from 'react';
import NoSwimPurelySvg from '@sensoro-design/icons-svg/es/asn/NoSwimPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoSwimPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoSwimPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoSwimPurely);

RefIcon.displayName = 'NoSwimPurely';

export default RefIcon;
