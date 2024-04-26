// This icon file is generated automatically.
import * as React from 'react';
import Service24HourOutlinedSvg from '@sensoro-design/icons-svg/es/asn/Service24HourOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const Service24HourOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={Service24HourOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(Service24HourOutlined);

RefIcon.displayName = 'Service24HourOutlined';

export default RefIcon;
