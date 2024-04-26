// This icon file is generated automatically.
import * as React from 'react';
import SmartLightPoleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmartLightPoleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartLightPoleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartLightPoleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartLightPoleOutlined);

RefIcon.displayName = 'SmartLightPoleOutlined';

export default RefIcon;
