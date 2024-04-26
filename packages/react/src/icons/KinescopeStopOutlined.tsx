// This icon file is generated automatically.
import * as React from 'react';
import KinescopeStopOutlinedSvg from '@sensoro-design/icons-svg/es/asn/KinescopeStopOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KinescopeStopOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KinescopeStopOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KinescopeStopOutlined);

RefIcon.displayName = 'KinescopeStopOutlined';

export default RefIcon;
