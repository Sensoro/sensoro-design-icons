// This icon file is generated automatically.
import * as React from 'react';
import SmartCommunityFilledSvg from '@sensoro-design/icons-svg/es/asn/SmartCommunityFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartCommunityFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartCommunityFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartCommunityFilled);

RefIcon.displayName = 'SmartCommunityFilled';

export default RefIcon;
