// This icon file is generated automatically.
import * as React from 'react';
import RoadNetworkFilledSvg from '@sensoro-design/icons-svg/es/asn/RoadNetworkFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RoadNetworkFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RoadNetworkFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RoadNetworkFilled);

RefIcon.displayName = 'RoadNetworkFilled';

export default RefIcon;
