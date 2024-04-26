// This icon file is generated automatically.
import * as React from 'react';
import TrafficLightFilledSvg from '@sensoro-design/icons-svg/es/asn/TrafficLightFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TrafficLightFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TrafficLightFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TrafficLightFilled);

RefIcon.displayName = 'TrafficLightFilled';

export default RefIcon;
