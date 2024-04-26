// This icon file is generated automatically.
import * as React from 'react';
import SmartWalkieTalkieOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmartWalkieTalkieOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartWalkieTalkieOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartWalkieTalkieOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartWalkieTalkieOutlined);

RefIcon.displayName = 'SmartWalkieTalkieOutlined';

export default RefIcon;
