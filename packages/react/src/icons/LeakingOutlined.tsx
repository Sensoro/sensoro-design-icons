// This icon file is generated automatically.
import * as React from 'react';
import LeakingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeakingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeakingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeakingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeakingOutlined);

RefIcon.displayName = 'LeakingOutlined';

export default RefIcon;
