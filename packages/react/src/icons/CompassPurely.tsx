// This icon file is generated automatically.
import * as React from 'react';
import CompassPurelySvg from '@sensoro-design/icons-svg/es/asn/CompassPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CompassPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CompassPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CompassPurely);

RefIcon.displayName = 'CompassPurely';

export default RefIcon;
