// This icon file is generated automatically.
import * as React from 'react';
import FallingObjectsPurelySvg from '@sensoro-design/icons-svg/es/asn/FallingObjectsPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FallingObjectsPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FallingObjectsPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FallingObjectsPurely);

RefIcon.displayName = 'FallingObjectsPurely';

export default RefIcon;
