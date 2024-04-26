// This icon file is generated automatically.
import * as React from 'react';
import SmartBoxOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmartBoxOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartBoxOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartBoxOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartBoxOutlined);

RefIcon.displayName = 'SmartBoxOutlined';

export default RefIcon;
