// This icon file is generated automatically.
import * as React from 'react';
import ProfileOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ProfileOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ProfileOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ProfileOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ProfileOutlined);

RefIcon.displayName = 'ProfileOutlined';

export default RefIcon;
