// This icon file is generated automatically.
import * as React from 'react';
import RoadFilledSvg from '@sensoro-design/icons-svg/es/asn/RoadFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RoadFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RoadFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RoadFilled);

RefIcon.displayName = 'RoadFilled';

export default RefIcon;
