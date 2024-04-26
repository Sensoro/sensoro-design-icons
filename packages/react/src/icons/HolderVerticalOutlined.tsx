// This icon file is generated automatically.
import * as React from 'react';
import HolderVerticalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HolderVerticalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HolderVerticalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HolderVerticalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HolderVerticalOutlined);

RefIcon.displayName = 'HolderVerticalOutlined';

export default RefIcon;
