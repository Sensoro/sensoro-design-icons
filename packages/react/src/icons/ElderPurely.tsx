// This icon file is generated automatically.
import * as React from 'react';
import ElderPurelySvg from '@sensoro-design/icons-svg/es/asn/ElderPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElderPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElderPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElderPurely);

RefIcon.displayName = 'ElderPurely';

export default RefIcon;
