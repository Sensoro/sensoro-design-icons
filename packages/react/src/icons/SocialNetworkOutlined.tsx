// This icon file is generated automatically.
import * as React from 'react';
import SocialNetworkOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SocialNetworkOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SocialNetworkOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SocialNetworkOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SocialNetworkOutlined);

RefIcon.displayName = 'SocialNetworkOutlined';

export default RefIcon;
