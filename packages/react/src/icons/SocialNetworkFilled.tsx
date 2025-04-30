// This icon file is generated automatically.
import * as React from 'react';
import SocialNetworkFilledSvg from '@sensoro-design/icons-svg/es/asn/SocialNetworkFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SocialNetworkFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SocialNetworkFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SocialNetworkFilled);

RefIcon.displayName = 'SocialNetworkFilled';

export default RefIcon;
