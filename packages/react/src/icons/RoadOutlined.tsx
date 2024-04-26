// This icon file is generated automatically.
import * as React from 'react';
import RoadOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RoadOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RoadOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RoadOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RoadOutlined);

RefIcon.displayName = 'RoadOutlined';

export default RefIcon;
