// This icon file is generated automatically.
import * as React from 'react';
import HeartRateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HeartRateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeartRateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeartRateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeartRateOutlined);

RefIcon.displayName = 'HeartRateOutlined';

export default RefIcon;
