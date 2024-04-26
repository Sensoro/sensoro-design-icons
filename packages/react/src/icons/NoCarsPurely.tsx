// This icon file is generated automatically.
import * as React from 'react';
import NoCarsPurelySvg from '@sensoro-design/icons-svg/es/asn/NoCarsPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoCarsPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoCarsPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoCarsPurely);

RefIcon.displayName = 'NoCarsPurely';

export default RefIcon;
