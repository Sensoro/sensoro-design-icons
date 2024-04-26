// This icon file is generated automatically.
import * as React from 'react';
import BeautySalonOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BeautySalonOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BeautySalonOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BeautySalonOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BeautySalonOutlined);

RefIcon.displayName = 'BeautySalonOutlined';

export default RefIcon;
