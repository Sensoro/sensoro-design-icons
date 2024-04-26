// This icon file is generated automatically.
import * as React from 'react';
import PanoramaTourOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PanoramaTourOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PanoramaTourOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PanoramaTourOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PanoramaTourOutlined);

RefIcon.displayName = 'PanoramaTourOutlined';

export default RefIcon;
