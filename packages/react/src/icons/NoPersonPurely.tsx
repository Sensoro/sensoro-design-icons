// This icon file is generated automatically.
import * as React from 'react';
import NoPersonPurelySvg from '@sensoro-design/icons-svg/es/asn/NoPersonPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoPersonPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoPersonPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoPersonPurely);

RefIcon.displayName = 'NoPersonPurely';

export default RefIcon;
