// This icon file is generated automatically.
import * as React from 'react';
import TrafficPoliceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TrafficPoliceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TrafficPoliceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TrafficPoliceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TrafficPoliceOutlined);

RefIcon.displayName = 'TrafficPoliceOutlined';

export default RefIcon;
