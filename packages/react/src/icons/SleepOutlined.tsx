// This icon file is generated automatically.
import * as React from 'react';
import SleepOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SleepOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SleepOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SleepOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SleepOutlined);

RefIcon.displayName = 'SleepOutlined';

export default RefIcon;
