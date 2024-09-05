// This icon file is generated automatically.
import * as React from 'react';
import SpaceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SpaceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SpaceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SpaceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SpaceOutlined);

RefIcon.displayName = 'SpaceOutlined';

export default RefIcon;
