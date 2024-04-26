// This icon file is generated automatically.
import * as React from 'react';
import PoweroffOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PoweroffOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PoweroffOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PoweroffOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PoweroffOutlined);

RefIcon.displayName = 'PoweroffOutlined';

export default RefIcon;
