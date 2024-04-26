// This icon file is generated automatically.
import * as React from 'react';
import ProfileFilledSvg from '@sensoro-design/icons-svg/es/asn/ProfileFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ProfileFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ProfileFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ProfileFilled);

RefIcon.displayName = 'ProfileFilled';

export default RefIcon;
