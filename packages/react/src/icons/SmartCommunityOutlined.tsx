// This icon file is generated automatically.
import * as React from 'react';
import SmartCommunityOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmartCommunityOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartCommunityOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartCommunityOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartCommunityOutlined);

RefIcon.displayName = 'SmartCommunityOutlined';

export default RefIcon;
