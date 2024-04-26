// This icon file is generated automatically.
import * as React from 'react';
import TimeMachineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TimeMachineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TimeMachineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TimeMachineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TimeMachineOutlined);

RefIcon.displayName = 'TimeMachineOutlined';

export default RefIcon;
