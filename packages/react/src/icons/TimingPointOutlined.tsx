// This icon file is generated automatically.
import * as React from 'react';
import TimingPointOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TimingPointOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TimingPointOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TimingPointOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TimingPointOutlined);

RefIcon.displayName = 'TimingPointOutlined';

export default RefIcon;
