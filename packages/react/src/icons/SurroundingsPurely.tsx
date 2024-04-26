// This icon file is generated automatically.
import * as React from 'react';
import SurroundingsPurelySvg from '@sensoro-design/icons-svg/es/asn/SurroundingsPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SurroundingsPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SurroundingsPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SurroundingsPurely);

RefIcon.displayName = 'SurroundingsPurely';

export default RefIcon;
