// This icon file is generated automatically.
import * as React from 'react';
import LeftUpOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeftUpOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeftUpOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeftUpOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeftUpOutlined);

RefIcon.displayName = 'LeftUpOutlined';

export default RefIcon;
