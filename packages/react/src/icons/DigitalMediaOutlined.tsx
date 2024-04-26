// This icon file is generated automatically.
import * as React from 'react';
import DigitalMediaOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DigitalMediaOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DigitalMediaOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DigitalMediaOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DigitalMediaOutlined);

RefIcon.displayName = 'DigitalMediaOutlined';

export default RefIcon;
