// This icon file is generated automatically.
import * as React from 'react';
import AvatarPurelySvg from '@sensoro-design/icons-svg/es/asn/AvatarPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AvatarPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AvatarPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AvatarPurely);

RefIcon.displayName = 'AvatarPurely';

export default RefIcon;
