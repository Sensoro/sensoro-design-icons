// This icon file is generated automatically.
import * as React from 'react';
import GeologicalDisasterFilledSvg from '@sensoro-design/icons-svg/es/asn/GeologicalDisasterFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GeologicalDisasterFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GeologicalDisasterFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GeologicalDisasterFilled);

RefIcon.displayName = 'GeologicalDisasterFilled';

export default RefIcon;
