// This icon file is generated automatically.
import * as React from 'react';
import HangUpOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HangUpOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HangUpOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HangUpOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HangUpOutlined);

RefIcon.displayName = 'HangUpOutlined';

export default RefIcon;
