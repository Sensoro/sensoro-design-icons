// This icon file is generated automatically.
import * as React from 'react';
import NoPersonsPurelySvg from '@sensoro-design/icons-svg/es/asn/NoPersonsPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoPersonsPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoPersonsPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoPersonsPurely);

RefIcon.displayName = 'NoPersonsPurely';

export default RefIcon;
