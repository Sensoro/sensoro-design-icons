// This icon file is generated automatically.
import * as React from 'react';
import PushpinOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PushpinOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PushpinOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PushpinOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PushpinOutlined);

RefIcon.displayName = 'PushpinOutlined';

export default RefIcon;
