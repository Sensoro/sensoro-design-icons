// This icon file is generated automatically.
import * as React from 'react';
import SerialNumberOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SerialNumberOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SerialNumberOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SerialNumberOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SerialNumberOutlined);

RefIcon.displayName = 'SerialNumberOutlined';

export default RefIcon;
