// This icon file is generated automatically.
import * as React from 'react';
import MobileOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MobileOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MobileOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MobileOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MobileOutlined);

RefIcon.displayName = 'MobileOutlined';

export default RefIcon;
